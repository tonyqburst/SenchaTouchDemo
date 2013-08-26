Ext.define('MyApp.store.Items', {
    extend: 'Ext.data.TreeStore',
    model: 'MyApp.model.Items',
    defaultRootProperty: 'items',
    proxy: {
        type: 'ajax',
        url: 'resources/json/items.json',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
})




