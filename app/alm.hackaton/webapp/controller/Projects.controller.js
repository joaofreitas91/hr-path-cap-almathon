sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "com/alm/hackaton/mock/report",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/m/MessageBox",
    "sap/m/Dialog",
    "sap/m/DialogType",
    "sap/m/ProgressIndicator",
    "sap/m/Text",
    "sap/m/Button",
    "sap/m/VBox",
], (Controller, report, JSONModel, Filter, FilterOperator, MessageBox, Dialog, DialogType, ProgressIndicator, Text, Button, VBox) => {
    "use strict";

    return Controller.extend("com.alm.hackaton.controller.Projects", {
        async onInit() {
            const oODataModel = this.getOwnerComponent().getModel();
            const oBinding = oODataModel.bindList("/Projects");
            const aContexts = await oBinding.requestContexts();
            const aData = aContexts.map(oCtx => oCtx.getObject());
            const oJsonModel = new JSONModel(aData);
            this.getView().setModel(oJsonModel, "local");

        },

        onSearch(oEvent) {
            const sQuery = oEvent.getParameter("newValue"); 
            const oTable = this.byId("projectsTable");
            const oBinding = oTable.getBinding("items");

            debugger

            if (sQuery && sQuery.length > 0) {
                const aFilters = [
                    new Filter("name", FilterOperator.Contains, sQuery),
                    new Filter("purpose", FilterOperator.Contains, sQuery)
                ];

                oBinding.filter(new Filter({
                    filters: aFilters,
                    and: false
                }));
            } else {
                oBinding.filter([]);
            }
        },

        handleProcess(oEvent) {
            const that = this
            MessageBox.confirm("Do you want to proceed with processing the selected project?", {
                actions: [MessageBox.Action.OK, "Cancel"],
                emphasizedAction: MessageBox.Action.OK,
                title: "Confirmation",
                onClose: function (sAction) {
                    if( sAction === "OK") {
                        that.onProcess(oEvent)
                    }
                },
                dependentOn: this.getView()
            });
        },

        async onProcess(oEvent) {
            let progress = 0;
            // let phase = 1;

            const oProgress = new ProgressIndicator({
                percentValue: progress,
                displayValue: progress + "%",
                showValue: true,
                width: "100%",
                state: "None"
            });

            const oPhaseText = new Text({ text: "Step 1: Connecting to SAP Cloud ALMAuthenticating and retrieving your project data" });

            const closeButton = new Button({
                text: "Fechar",
                enabled: false,
                press: () => this._oDialog.close(),
            })

            const oVBox = new VBox({
                items: [oPhaseText, oProgress],
                alignItems: "Center",
                justifyContent: "Center",
                width: "100%",
                renderType: "Bare"
            });

            this._oDialog = new Dialog({
                title: "Build report",
                type: DialogType.Message,
                content: oVBox,
                showHeader: true,
                showFooter: true,
                draggable: true,
                resizable: false,
                beginButton: closeButton,
                escapeHandler: (oPromise) => {
                    oPromise.reject();
                }
            });

            this.getView().addDependent(this._oDialog);
            this._oDialog.open();

            this._interval = setInterval(() => {
                progress += 1;
                oProgress.setPercentValue(progress);
                oProgress.setDisplayValue(progress + "%");

                if(progress === 17 ) {
                    oPhaseText.setText("Step 2: Collecting RequirementsGathering all tasks and requirements from the selected project");
                }

                if(progress === 34 ) {
                    oPhaseText.setText("Step 3: Extracting DetailsFetching comprehensive descriptions and metadata for each requirement");
                }

                if(progress === 51 ) {
                    oPhaseText.setText("Step 4: AI AnalysisClassifying requirements as standard vs. gaps using intelligent analysis");
                }

                if(progress === 68 ) {
                    oPhaseText.setText("Step 5: Calculating MetricsComputing fit-to-standard adherence and risk assessments");
                }

                if(progress === 85 ) {
                    oPhaseText.setText("Step 6: Generating ReportCompiling results and creating your detailed analysis report");
                }


                if (progress >= 100) {
                    clearInterval(this._interval);
                    setTimeout(() => {
                        oPhaseText.setText("Finished!");
                        oProgress.setVisible(false)
                        closeButton.setEnabled(true)

                        this.downloadPdfFromBase64()
                    }, 100);
                }
            }, 200);

        },

        downloadPdfFromBase64(fileName = "report.pdf") {
            const almReport = report.almReport()
            const byteCharacters = atob(almReport);
            const byteNumbers = new Array(byteCharacters.length);

            for (let i = 0; i < byteCharacters.length; i++) {
                byteNumbers[i] = byteCharacters.charCodeAt(i);
            }

            const byteArray = new Uint8Array(byteNumbers);

            const blob = new Blob([byteArray], { type: "application/pdf" });

            // Criar link temporário e forçar download
            const link = document.createElement("a");
            link.href = URL.createObjectURL(blob);
            link.download = fileName;
            link.click();

            URL.revokeObjectURL(link.href);
        }
    });
});