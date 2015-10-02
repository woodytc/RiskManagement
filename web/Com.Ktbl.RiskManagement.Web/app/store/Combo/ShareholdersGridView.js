/*
 * File: app/model/ShareholdersGridView.js
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

Ext.define('RiskManagement.model.ShareholdersGridView', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.field.Integer'
    ],

    fields: [
        {
            type: 'int',
            name: 'Id'
        },
        {
            name: 'CorporationId'
        },
        {
            name: 'CommitteeType'
        },
        {
            name: 'CommitteeTypeName'
        },
        {
            name: 'IdCard'
        },
        {
            name: 'OccupationTypeName'
        },
        {
            name: 'BusinessType'
        },
        {
            name: 'LocationIncome'
        },
        {
            name: 'LocationIncomeName'
        },
        {
            name: 'IsPolitician'
        }
    ]
});