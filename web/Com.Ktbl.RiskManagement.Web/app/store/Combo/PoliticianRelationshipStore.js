﻿/*
 * File: app/store/Combo/BusinessTypeStore.js
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

Ext.define('RiskManagement.store.Combo.PoliticianRelationshipStore', {
    extend: 'Ext.data.Store',
    alias: 'store.politicianrelationshipstore',

    requires: [
        'RiskManagement.model.Combo.BusinessTypeModel',
        'Ext.data.proxy.Memory'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'Combo.BusinessTypeStore',
            model: 'RiskManagement.model.Combo.PoliticianRelationshipModel',
            data: [
                {
                    Id: 1,
                    Name: 'บิดา'
                },
                {
                    Id: 2,
                    Name: 'มารดา'
                },
                {
                    Id: 3,
                    Name: 'คู่สมรส'
                },
                {
                    Id: 4,
                    Name: 'บุตร'
                },
                {
                    Id: 5,
                    Name: 'ผู้ควบคุมดูแลสินทรัพย์'
                },
                {
                    Id: 6,
                    Name: 'ไม่มีส่วนเกี่ยวข้อง'
                },
            ],
            proxy: {
                type: 'memory'
            }
            //proxy: {
            //    type: 'rest',
            //    url: 'api/common/GetBusinessType',
            //    reader: {
            //            type: 'json'
            //    }
            //}
        }, cfg)]);
    }
});