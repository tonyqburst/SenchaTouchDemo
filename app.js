Ext.application({
    name: 'MyApp',
    views: ['Items'],
    models: ['Items'],
    stores: ['Items'],
    launch: function () {
        Ext.Viewport.add([
            { xtype: 'items' }
        ]);
    }
})

//Ext.create('Ext.tab.Panel', {
//    fullscreen: true,
//    tabBarPosition: 'bottom',
//    items: [
//        {
//            title: 'Home',
//            iconCls: 'home',
//            cls: 'home',
//            html: [
//                '<img class="sencha-home-icon" src="resources/icons/sencha-icon.png" />',
//                '<h1>Welcome to My First Sencha Touch Application</h1>'
//            ].join("")
//        },
//        {
//            xtype: 'nestedlist',
//            iconCls: 'star',
//            title: 'Items',
//            items: [
//                {
//                    xtype: 'items'
//                }
//            ]
//        }
//    ]
//});