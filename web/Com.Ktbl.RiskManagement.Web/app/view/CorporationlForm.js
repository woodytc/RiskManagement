/*
 * File: app/view/CorporationlForm.js
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

Ext.define('RiskManagement.view.CorporationlForm', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.corporationlform',

    requires: [
        'RiskManagement.view.CorporationlFormViewModel',
        'RiskManagement.view.CorporationlFormViewController',
        'Ext.form.Panel',
        'Ext.form.field.Hidden',
        'Ext.form.field.Checkbox',
        'Ext.form.field.ComboBox',
        'Ext.form.FieldContainer',
        'Ext.form.field.File',
        'Ext.button.Button'
    ],

    controller: 'corporationlform',
    viewModel: {
        type: 'corporationlform'
    },
    itemId: 'tab11',
    bodyPadding: 25,
    title: 'นิติบุคคล',

    items: [
        {
            xtype: 'form',
            reference: 'form',
            itemId: 'myform3',
            width: 750,
            defaults: {
                labelWidth: 175,
                labelAlign: 'right',
                margin: '5 5 5 5',
                afterLabelTextTpl: '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>',
                width: '95%',
                allowBlank: false
            },
            bodyPadding: 10,
            title: 'จัดการข้อมูลนิติบุคคล',
            layout: {
                type: 'table',
                columns: 2
            },
            items: [
                {
                    xtype: 'hiddenfield',
                    //fieldLabel: 'ID',
                    name: 'Id',
                    value:'0'
                },
                {
                    xtype: 'hiddenfield',
                    name: 'Extension1',
                    //value: '0'
                },
                {
                    xtype: 'hiddenfield',
                    name: 'Extension2',
                    //value: '0'
                },
                {
                    xtype: 'checkboxfield',
                    colspan: 2,
                    fieldLabel: 'นิติบุคคล',
                    name: 'Individual',
                    readOnly: true,
                    checked: true
                },
                {
                    xtype: 'combobox',
                    allowBlank: false,
                    fieldLabel: 'สัญชาติ',
                    name: 'Nationality',
                    emptyText: '[ สัญชาติ ]',
                    displayField: 'Name',
                    store: 'Combo.RegionStore',
                    valueField: 'Id'

                },
                {
                    xtype: 'checkboxfield',
                    fieldLabel: 'จดทะเบียนในประเทศไทย',
                    name: 'IsRegistrationThai'
                },
                {
                    xtype: 'textfield',
                    colspan: 2,
                    allowBlank: false,
                    fieldLabel: 'เลขที่ทะเบียนการค้า',
                    name: 'RegistrationId',
                    emptyText: '[ xxxxxxxxxxxxx ]'
                },
                {
                    xtype: 'fieldcontainer',
                    colspan: 2,
                    width: '100%',
                    layout: 'table',
                    fieldLabel: 'บริษัท',
                    items: [
                        {
                            xtype: 'combobox',
                            margin: '0 5 0 0',
                            fieldLabel: 'จดทะเบียนบริษัท',
                            hideLabel: true,
                            name: 'RegistrationType',
                            allowBlank: false,
                            emptyText: '[ เลือกประเภทกิจการ ]',
                            displayField: 'Name',
                            store: 'Combo.RegistrationTypeStore',
                            valueField: 'Id'
                        },
                        {
                            xtype: 'textfield',
                            margin: '0 5 0 0',
                            width: '100%',
                            fieldLabel: 'ชื่อบริษัท',
                            hideLabel: true,
                            allowBlank: false,
                            name: 'CompanyName',
                            emptyText: '[ ชื่อบริษัท ]'
                        }
                    ]
                },
                {
                    xtype: 'combobox',
                    reference: 'catelogyField',
                    fieldLabel: 'หมวดอาชีพ',
                    name: 'OccupationCategoryId',
                    emptyText: '[ เลือกหมวดอาชีพ ]',
                    displayField: 'Name',
                    store: 'Combo.OccupationCatelogyStore',
                    valueField: 'Id',
                    autoLoadOnValue: true,
                    editable: false,
                    allowBlank: false,
                    listeners: {
                        change: 'onCatelogyChange'
                    }
                },
                {
                    xtype: 'combobox',
                    reference: 'groupField',
                    fieldLabel: 'กลุ่มอาชีพ',
                    name: 'OccupationGroupId',
                    emptyText: '[ เลือกกลุ่มอาชีพ ]',
                    displayField: 'Name',
                    store: 'Combo.OccupationGroupStore',
                    valueField: 'Id',
                    autoLoadOnValue: true,
                    editable: false,
                    allowBlank: false,
                    listeners: {
                        change: 'onGroupChange'
                    }
                },
                {
                    xtype: 'combobox',
                    fieldLabel: 'ประเภทอาชีพ',
                    reference: 'typeField',
                    name: 'OccupationTypeId',
                    emptyText: '[ เลือกประเภทอาชีพ ]',
                    displayField: 'Name',
                    store: 'Combo.OccupationTypeStore',
                    valueField: 'Id',
                    autoLoadOnValue: true,
                    editable: false,
                    allowBlank: false,
                    listeners: {
                        change: 'onTypeChange'
                    }
                    
                },
                {
                    xtype: 'combobox',
                    fieldLabel: 'ตำแหน่ง',
                    reference: 'positionField',
                    name: 'PositionId',
                    emptyText: '[ เลือกตำแหน่ง ]',
                    displayField: 'Name',
                    store: 'Combo.PositionStore',
                    valueField: 'Id',
                    autoLoadOnValue: true,
                    editable: false,
                    allowBlank: false,

                },
                {
                    xtype: 'combobox',
                    allowBlank: false,
                    fieldLabel: 'ประเภทธุรกิจ',
                    name: 'BusinessId',
                    emptyText: '[ เลือกประเภทอาชีพ ]',
                    displayField: 'Name',
                    store: 'Combo.BusinessTypeStore',
                    valueField: 'Id'
                },
                {
                    xtype: 'combobox',
                    allowBlank: false,
                    fieldLabel: 'แหล่งที่มาของรายได้',
                    name: 'SourceOfIncome',
                    emptyText: '[ แหล่งที่มาของรายได้ ]',
                    displayField: 'Name',
                    store: 'Combo.SourceOfIncomeStore',
                    valueField: 'Id'
                },
                {
                    xtype: 'combobox',
                    fieldLabel: 'แหล่งที่ตั้งของรายได้',
                    allowBlank: false,
                    name: 'LocationOfIncome',
                    emptyText: '[ เลือกที่ตั้งของรายได้ ]',
                    displayField: 'Name',
                    store: 'Combo.RegionStore',
                    valueField: 'Id'
                },
                {
                    xtype: 'combobox',
                    allowBlank: false,
                    fieldLabel: 'อาศัยอยู่ที่ประเทศ',
                    name: 'LiveInCountry',
                    emptyText: '[ อาศัยอยู่ที่ประเทศ ]',
                    displayField: 'Name',
                    store: 'Combo.RegionStore',
                    valueField: 'Id'
                },
                //{
                //    xtype: 'checkboxfield',
                //    fieldLabel: 'ความสัมพันธ์กับนักการเมือง',
                //    name: 'IsPolitician'
                //},
                {
                    xtype: 'combobox',
                    allowBlank: false,
                    fieldLabel: 'ความสัมธ์กับนักการเมือง',
                    name: 'PoliticianRelationship',
                    emptyText: '[ ความสัมธ์กับนักการเมือง ]',
                    displayField: 'Name',
                    store: 'Combo.PoliticianRelationshipStore',
                    valueField: 'Id'
                },
                {
                    xtype: 'combobox',
                    allowBlank: false,
                    fieldLabel: 'ประเภทกิจการ',
                    name: 'Tsic',
                    emptyText: '[เลือกประเภทกิจการ ]',
                    displayField: 'Name',
                    store: 'Combo.ISicCodeStore',
                    valueField: 'Id'
                },
                {
                    xtype: 'filefield',
                    allowBlank: false,
                    colspan: 2,
                    width: '100%',
                    fieldLabel: 'หนังสือให้ความยินยอม ในการเปิดเผยข้อมูลบริษัท',
                    labelWidth: 300,
                    name: 'File1',
                    emptyText: 'ไฟล์',
                    listeners: {
                        //validitychange: function (comp, isValid, eOpts) {
                        //    console.log('validitychange');

                        //},
                        //dirtychange: function (comp, isDirty, eOpts) {
                        //    console.log('dirtychange');

                        //},
                        change: function (comp, value, eOpts) {
                            var pos = value.lastIndexOf('.'),
                                ext = value.substring(pos);
                            comp.up().getForm().findField('Extension1').setValue(ext);
                        }
                    }
                },
                {
                    xtype: 'filefield',
                    colspan: 2,
                    allowBlank: false,
                    width: '100%',
                    fieldLabel: 'เอกสารแนบ KYC/CDD',
                    name: 'File2',
                    emptyText: 'ไฟล์',
                    listeners: {
                        validitychange: function (comp, isValid, eOpts) {
                            console.log('validitychange');

                        },
                        dirtychange:function( comp, isDirty, eOpts ){
                            console.log('dirtychange');

                        },
                        change: function (comp, value, eOpts) {
                            var pos = value.lastIndexOf('.'),
                                ext = value.substring(pos);
                            comp.up().getForm().findField('Extension2').setValue(ext);
                        }
                    }
                },
                //{
                //    xtype: 'checkboxfield',
                //    colspan: 2,
                //    fieldLabel: 'ความยินยอม ในการเปิดเผบข้อมูลบริษัท',
                //    labelWidth: 250,
                //    name: 'IsAccept'
                //},
                {
                    xtype: 'radiogroup',
                    fieldLabel: 'ความยินยอม ในการเปิดเผบข้อมูลบริษัท',
                    colspan: 2,
                    allowBlank: false,
                    items: [
                        {
                            xtype: 'radiofield',
                            name: 'IsAccept',
                            boxLabel: 'ยอมรับ',
                            value: 1,
                            allowBlank: false,
                            margin: '0 5 0 5'
                        },
                        {
                            xtype: 'radiofield',
                            name: 'IsAccept',
                            boxLabel: 'ไม่ยอมรับ',
                            checked: true,
                            value:0,
                            width: 250,
                            margin: '0 5 0 5'
                        }
                    ]
                },
                {
                    xtype: 'container',
                    padding: 10,
                    layout: {
                        type: 'hbox',
                        align: 'middle',
                        pack: 'center'
                    },
                    items: [
                        {
                            xtype: 'button',
                            flex: 1,
                            formBind: true,
                            id: 'saveButton',
                            margin: 5,
                            text: 'Save',
                            listeners: {
                                click: 'onSave'
                            }
                        },
                        {
                            xtype: 'button',
                            flex: 1,
                            id: 'shareholdersButton',
                            text: 'กรรมการผู้ถือหุ้น',
                            tooltip: 'บันทึกกรรมการผู้ถือหุ้น',
                            //TODO: DEGUB [20150810] woody
                            hidden:true,
                            listeners: {
                                click: 'onShareholdersClick'
                            }
                        },
                         {
                             xtype: 'button',
                             flex: 1,
                             hidden: true,
                             id: 'takeRiskButton',
                             margin: 5,
                             text: 'TakeRisk',
                             listeners: {
                                 click: 'onTakeRisk'
                             }
                         },
                        {
                            xtype: 'button',
                            flex: 1,
                            reference: 'cancelButton',
                            margin: 5,
                            text: 'Cancel',
                            listeners: {
                                click: 'onCancel'
                            }
                        }
                    ]
                }
            ]
        }
    ],
    listeners: {
        beforerender: 'onBeforeRender'
    }

});