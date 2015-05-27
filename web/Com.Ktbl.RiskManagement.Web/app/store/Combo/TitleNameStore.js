/*
 * File: app/store/Combo/TitleNameStore.js
 *
 * This file was generated by Sencha Architect version 3.2.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 5.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 5.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('RiskManagement.store.Combo.TitleNameStore', {
    extend: 'Ext.data.Store',
    alias: 'store.titlenamestore',

    requires: [
        'RiskManagement.model.TitleNameModel',
        'Ext.data.proxy.Memory'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'Combo.TitleNameStore',
            model: 'RiskManagement.model.TitleNameModel',
            data: [
                {
                    Id: 800,
                    Name: 'corporis'
                },
                {
                    Id: 343,
                    Name: 'blanditiis'
                },
                {
                    Id: 660,
                    Name: 'incidunt'
                },
                {
                    Id: 918,
                    Name: 'sit'
                },
                {
                    Id: 389,
                    Name: 'id'
                },
                {
                    Id: 969,
                    Name: 'unde'
                },
                {
                    Id: 770,
                    Name: 'labore'
                },
                {
                    Id: 388,
                    Name: 'voluptas'
                },
                {
                    Id: 524,
                    Name: 'voluptatem'
                },
                {
                    Id: 781,
                    Name: 'nostrum'
                },
                {
                    Id: 43,
                    Name: 'consequatur'
                },
                {
                    Id: 261,
                    Name: 'qui'
                },
                {
                    Id: 751,
                    Name: 'rerum'
                },
                {
                    Id: 541,
                    Name: 'maiores'
                },
                {
                    Id: 910,
                    Name: 'veniam'
                },
                {
                    Id: 723,
                    Name: 'numquam'
                },
                {
                    Id: 535,
                    Name: 'quia'
                },
                {
                    Id: 107,
                    Name: 'quos'
                },
                {
                    Id: 246,
                    Name: 'asperiores'
                },
                {
                    Id: 749,
                    Name: 'porro'
                },
                {
                    Id: 626,
                    Name: 'omnis'
                },
                {
                    Id: 860,
                    Name: 'voluptatem'
                },
                {
                    Id: 904,
                    Name: 'iure'
                },
                {
                    Id: 235,
                    Name: 'provident'
                },
                {
                    Id: 491,
                    Name: 'eum'
                },
                {
                    Id: 93,
                    Name: 'fuga'
                },
                {
                    Id: 336,
                    Name: 'ex'
                },
                {
                    Id: 837,
                    Name: 'saepe'
                },
                {
                    Id: 937,
                    Name: 'modi'
                },
                {
                    Id: 525,
                    Name: 'minima'
                }
            ],
            proxy: {
                type: 'memory'
            }
        }, cfg)]);
    }
});