Ext.define('MyApp.view.Items', {
    extend: 'Ext.tab.Panel',
    alias: "widget.items",
    config: {
        fullscreen: true,
        tabBarPosition: 'bottom',
        items: [
            {
                title: 'Home',
                iconCls: 'home',
                cls: 'home',
                html: [
                    '<img class="sencha-home-icon" src="resources/icons/sencha-icon.png" />',
                    '<h1>Welcome to My First Sencha Touch Application</h1>'
                ].join("")
            },
            {
                xtype: 'nestedlist',
                title: 'Groceries',
                tabBarPosition: 'bottom',
                store: 'Items',
                iconCls: 'star'
            },

            {
                xtype: 'map',
                title: 'Map',
                iconCls: 'maps',
                mapOptions: {
                    center: new google.maps.LatLng(10.260335, 76.355839),
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    zoom: 15
                },
                initialize: function () {
                    var gMap = this.getMap();
                    var trafficLayer = new google.maps.TrafficLayer();
                    trafficLayer.setMap(gMap);
                }
            },
            {
                xtype: 'audio',
                title: 'Audio',
                iconCls: 'user',
                id: 'my_audio',
                url: 'resources/audio/Sanchari Neee_Usthad Hotel.mp3',
                autoplay: true,
                poster: 'resources/images/usthad-hotel-poster.jpg',
                html: [
                    '<h1 class="audio-title">Play Sancharee Nee <a href="http://en.wikipedia.org/wiki/Ustad_Hotel" target="_blank">Usthad Hotel</a></h1>'
                ].join(),
                handler: function () {
                    Ext.getCmp('my_audio').play();
                }
            },
            {
                xtype: 'video',
                title: 'Video',
                iconCls: 'x-video',
                poster: 'resources/images/usthad-hotel-poster.png',
                url: 'resources/videos/angularJS.mp4'
            } ,
            {
                xtype: 'carousel',
                title: 'Images',
                iconCls: 'star',
                items: [
                    {
                        xtype: 'image',
                        src: 'resources/images/1.jpg'
                    },
                    {
                        xtype: 'image',
                        src: 'resources/images/2.jpg'
                    },
                    {
                        xtype: 'image',
                        src: 'resources/images/3.jpg'
                    }
                ]
            }


        ]

//        title: 'Groceries',
//        tabBarPosition: 'bottom',
//        fullscreen: true,
//        store: 'Items'
    }
})
;