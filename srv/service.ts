import cds from "@sap/cds";

import { Projects } from "#cds-models/ALMService"

export default class ALMService extends cds.ApplicationService {
    init(): Promise<void> {

        this.on('READ', Projects, async (req) => {

            const data: Projects = [
                {
                    "id": "3ab8ef67-8c07-440b-b136-7340048fec2e",
                    "name": "Teste Implementação",
                    "status": "Bloqueado",
                    "purpose": "IMPLEMENTATION",
                    "operationalStatus": "ONTRK",
                    "phaseId": "9a68190d-ec40-4f74-b0d8-d0ccd8223a3a"
                },
                {
                    "id": "40f50b08-06f9-47a4-b7cf-8885ab8cecd5",
                    "name": "Testes_Projeto São Martinho",
                    "status": "Confirmado",
                    "purpose": "IMPLEMENTATION",
                    "operationalStatus": "ONTRK",
                    "phaseId": "c3ade38c-1443-4ef9-8db3-6b03d9ccdd1b"
                },
                {
                    "id": "31b7c844-ed79-41e9-9ec0-de81c5e6ba52",
                    "name": "1694 - AMIL - OL-0043619 - PORTAL DE BENEFICIOS - BRHAIN",
                    "status": "Confirmado",
                    "purpose": "IMPLEMENTATION",
                    "operationalStatus": "ONTRK",
                    "phaseId": "2dd2842e-ce83-4d68-9549-1ce736dbcf80"
                },
                {
                    "id": "a5cccfc2-7379-4d83-992c-0b4eda08f849",
                    "name": "Teste_SuccessCore",
                    "status": "Bloqueado",
                    "purpose": "IMPLEMENTATION",
                    "operationalStatus": "ONTRK",
                    "phaseId": "84a5b15f-9a56-4f5d-9b8f-b536d271e0c3"
                },
                {
                    "id": "158e700e-2a7e-4081-aa6d-4696fb1c8993",
                    "name": "Projeto_Padrão",
                    "status": "Confirmado",
                    "purpose": "IMPLEMENTATION",
                    "operationalStatus": "NATTN",
                    "phaseId": "edba625f-8581-4b2e-bbc4-193a02a536e4"
                },
                {
                    "id": "11111111-1111-1111-1111-111111111111",
                    "name": "Projeto Cargas",
                    "status": "Confirmado",
                    "purpose": "IMPLEMENTATION",
                    "operationalStatus": "ONTRK",
                    "phaseId": "e6770da6-d3c8-43aa-beba-044f8272b4f9"
                },
                {
                    "id": "077db439-1d73-47bc-a3f7-e09b698e91e2",
                    "name": "Projeto São Martinho - Workflow e propagação de campos",
                    "status": "Confirmado",
                    "purpose": "IMPLEMENTATION",
                    "operationalStatus": "ONTRK",
                    "phaseId": "6081007c-4cd8-4e49-b958-a578367d43ac"
                },
                {
                    "id": "5dae0edc-5a0f-483c-8fa8-7e28dcc73ffd",
                    "name": "Implementação Onda 2 - Hackaton SM",
                    "status": "Confirmado",
                    "purpose": "IMPLEMENTATION",
                    "operationalStatus": "ONTRK",
                    "phaseId": "2243eb9f-0d26-4cb9-a5b5-c3d56881df64"
                },
                {
                    "id": "7cf05629-287f-440f-92e1-db4ee5df4774",
                    "name": "Hackaton - Implementação AG",
                    "status": "Confirmado",
                    "purpose": "IMPLEMENTATION",
                    "operationalStatus": "ONTRK",
                    "phaseId": "72992dd4-ce45-427b-9ea7-8ae976139f2f"
                },
                {
                    "id": "20263da0-d2b6-48ce-a0cf-eea20c7c501a",
                    "name": "eSocial - Validação de Eventos",
                    "status": "Confirmado",
                    "purpose": "IMPLEMENTATION",
                    "operationalStatus": "ONTRK",
                    "phaseId": "32e48c69-fced-4bb9-9e6f-03238ab10cbc"
                },
                {
                    "id": "1e7c8343-4fee-4748-9dbc-82d770f6975d",
                    "name": "Projeto eSocial",
                    "status": "Confirmado",
                    "purpose": "IMPLEMENTATION",
                    "operationalStatus": "ONTRK",
                    "phaseId": "5e5284c7-1d5e-4fc8-84dd-31202debabf2"
                },
                {
                    "id": "f25f335a-2bd2-49a5-aa1f-a05a5974c63d",
                    "name": "Projeto Integração SOC",
                    "status": "Confirmado",
                    "purpose": "IMPLEMENTATION",
                    "operationalStatus": "ONTRK",
                    "phaseId": "d88a29c4-4d04-4213-92a3-28dac550634c"
                },
                {
                    "id": "c1aa2ee7-43fa-49e9-8400-b85f1d8b1bb2",
                    "name": "ASUG - Implementação SAP SuccessFactors",
                    "status": "Bloqueado",
                    "purpose": "IMPLEMENTATION",
                    "operationalStatus": "ONTRK",
                    "phaseId": "78989e35-6acb-480b-94e4-5b761fec2251"
                },
                {
                    "id": "cf953f70-e840-4135-9023-d7c50d033a44",
                    "name": "iTallent - SAP SuccessFactors",
                    "status": "Bloqueado",
                    "purpose": "IMPLEMENTATION",
                    "operationalStatus": "ONTRK",
                    "phaseId": "ae518b59-37b2-4e1e-958f-2a4b2fdd14fe"

                }
            ]

            if (req.query.SELECT?.columns?.some(c => c.as === "$count")) {
                return [{ $count: data.length }]
            }

            return data

        })
        return super.init()
    }
}