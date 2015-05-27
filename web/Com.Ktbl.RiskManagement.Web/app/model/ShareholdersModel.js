/*
 * File: app/model/ShareholdersModel.js
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

Ext.define('RiskManagement.model.ShareholdersModel', {
    extend: 'Ext.data.Model',
    alias: 'model.shareholdersmodel',

    requires: [
        'Ext.data.field.Integer',
        'Ext.data.field.String'
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
            name: 'TitleName'
        },
        {
            name: 'FirstName'
        },
        {
            name: 'LastName'
        },
        {
            name: 'OccupationCatelogy'
        },
        {
            name: 'OccupationCatelogyName'
        },
        {
            name: 'OccupationGroup'
        },
        {
            name: 'OccupationGroupName'
        },
        {
            name: 'OccupationType'
        },
        {
            type: 'string',
            name: 'Position'
        },
        {
            name: 'BusinessType'
        },
        {
            name: 'SourceOfIncome'
        },
        {
            name: 'LocationIncome'
        },
        {
            name: 'CurrentlyLives'
        },
        {
            name: 'IsPolitician'
        },
        {
            name: 'File1'
        },
        {
            name: 'File2'
        },
        {
            name: 'IsAccept'
        }
    ]
});