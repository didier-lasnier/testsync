export {tbshistoriqueCols, toolbartbs, toobarregular};

const tbshistoriqueCols = [
    {field: 'Rtime', headerText: 'date', type: 'string', width: '100'},
    {field: 'USED', headerText: 'Espace Utilisé', type: 'number', width: '80'},
    {field: 'NAME', headerText: 'Nom', type: 'number', width: '200'},

]

const toolbartbs = [
    { text: 'Add', tooltipText: 'Add', prefixIcon: 'e-add', id: 'rsdc-add' },
    { text: 'Edit', tooltipText: 'Edit', prefixIcon: 'e-edit', id: 'rsdc-edit' },
    { text: 'Update', tooltipText: 'Update', prefixIcon: 'e-update', id: 'rsdc-update', disabled: 'true' },
    { text: 'Delete', tooltipText: 'Delete', prefixIcon: 'e-delete', id: 'rsdc-delete' },
    { text: 'Cancel', tooltipText: 'Cancel', prefixIcon: 'e-cancel', id: 'rsdc-cancel' },
    { text: 'Search', tooltipText: 'Search', prefixIcon: 'e-search', id: 'rsdc-search' },
    { text: 'Print', tooltipText: 'Print', prefixIcon: 'e-print', id: 'rsdc-print' },
    { text: 'ColumnChooser', tooltipText: 'ColumnChooser', prefixIcon: 'e-columnchooser', id: 'rsdc-columnchooser' },
    { text: 'PdfExport', tooltipText: 'PdfExport', prefixIcon: 'e-pdfexport', id: 'rsdc-pdfexport' },
    { text: 'ExcelExport', tooltipText: 'ExcelExport', prefixIcon: 'e-excelexport', id: 'rsdc-excelexport' },
    { text: 'CsvExport', tooltipText: 'CsvExport', prefixIcon: 'e-csvexport', id: 'rsdc-csvexport' }]

const toobarregular =['Add','Edit','Update','Delete','Cancel','Search','Print','ColumnChooser','PdfExport','ExcelExport','CsvExport']

/**
 Rtime": "01//05/2023",
 "USED": 2200,
 "USED2": 0.02,
 "vtbs.Name": "UNDO_7",
 "vtbs.dtbs.TablespaceName": "UNDO_7",
 "vtbs.dtbs.BlockSize": 8192
 */
