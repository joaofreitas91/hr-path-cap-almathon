namespace alm;

@ODataCapabilities.InsertRestrictions.Insertable: false
@ODataCapabilities.UpdateRestrictions.Updatable : false
@ODataCapabilities.DeleteRestrictions.Deletable : false
@ODataCapabilities.FilterRestrictions.Filterable: false
@ODataCapabilities.SortRestrictions.Sortable    : false
@ODataCapabilities.SelectSupport.Selectable     : false
@ODataCapabilities.ExpandRestrictions.Expandable: false
@ODataCapabilities.CountRestrictions.Countable  : false
@ODataCapabilities.SearchRestrictions.Searchable: false
entity Projects {
  key id                : UUID;
      name              : String;
      status            : String;
      purpose           : String;
      operationalStatus : String;
      phaseId           : UUID;
}
