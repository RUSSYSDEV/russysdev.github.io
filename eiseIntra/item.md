---
layout: docs
title: "eiseIntra Items, Actions and Tracing"
sidebar_left:
  title: "PHP Classes"
  class: "rsd-navbar-left"
  id: "rsd-navbar_left"
  folders:
    - title: "class eiseItem:"
      url: "#cls_eiseitem"
      folders:

      - title: "public properties:"
        folders:

        - title: "$conf"
          url: "#eiseitem_prop_conf"

        - title: "$id"
          url: "#eiseitem_prop_id"

        - title: "$item"
          url: "#eiseitem_prop_item"

        - title: "$table"
          url: "#eiseitem_prop_table"

        - title: "$intra"
          url: "#eiseitem_prop_intra"

        - title: "$oSQL"
          url: "#eiseitem_prop_osql"

      - title: "public methods:"
        folders:

        - title: "__construct()"
          url: "#eiseitem_fn___construct"

        - title: "getIDFromQueryString()"
          url: "#eiseitem_fn_getidfromquerystring"

        - title: "getSQLWhere()"
          url: "#eiseitem_fn_getsqlwhere"

        - title: "getURI()"
          url: "#eiseitem_fn_geturi"

        - title: "getData()"
          url: "#eiseitem_fn_getdata"

        - title: "refresh()"
          url: "#eiseitem_fn_refresh"

        - title: "form()"
          url: "#eiseitem_fn_form"

        - title: "getPKFields()"
          url: "#eiseitem_fn_getpkfields"

        - title: "getFields()"
          url: "#eiseitem_fn_getfields"

        - title: "getButtons()"
          url: "#eiseitem_fn_getbuttons"

        - title: "insert()"
          url: "#eiseitem_fn_insert"

        - title: "update()"
          url: "#eiseitem_fn_update"

        - title: "delete()"
          url: "#eiseitem_fn_delete"

        - title: "preventRecursiveHooks()"
          url: "#eiseitem_fn_preventrecursivehooks"

        - title: "updateTable()"
          url: "#eiseitem_fn_updatetable"

        - title: "getDelta()"
          url: "#eiseitem_fn_getdelta"

        - title: "convertBooleanData()"
          url: "#eiseitem_fn_convertbooleandata"

        - title: "attachFile()"
          url: "#eiseitem_fn_attachfile"

        - title: "deleteFile()"
          url: "#eiseitem_fn_deletefile"

        - title: "beforeAttachFile()"
          url: "#eiseitem_fn_beforeattachfile"

        - title: "afterAttachFile()"
          url: "#eiseitem_fn_afterattachfile"

        - title: "beforeDeleteFile()"
          url: "#eiseitem_fn_beforedeletefile"

        - title: "getFiles()"
          url: "#eiseitem_fn_getfiles"

        - title: "getFile()"
          url: "#eiseitem_fn_getfile"

        - title: "formFiles()"
          url: "#eiseitem_fn_formfiles"

        - title: "formMessages()"
          url: "#eiseitem_fn_formmessages"

        - title: "getMessages()"
          url: "#eiseitem_fn_getmessages"

        - title: "sendMessage()"
          url: "#eiseitem_fn_sendmessage"

      - title: "static methods:"
        folders:

        - title: "sendMessages()"
          url: "#eiseitem_fn_sendmessages"




    - title: "class eiseItemTraceable:"
      url: "#cls_eiseitemtraceable"
      folders:

      - title: "public properties:"
        folders:

        - title: "$ent"
          url: "#eiseitemtraceable_prop_ent"

        - title: "$staID"
          url: "#eiseitemtraceable_prop_staid"

        - title: "$currentAction"
          url: "#eiseitemtraceable_prop_currentaction"

        - title: "$virtualRoleMembers"
          url: "#eiseitemtraceable_prop_virtualrolemembers"

      - title: "protected properties:"
        folders:

        - title: "$defaultDataToObtain"
          url: "#eiseitemtraceable_prop_defaultdatatoobtain"

      - title: "private properties:"
        folders:

        - title: "$conf_default"
          url: "#eiseitemtraceable_prop_conf_default"

      - title: "public methods:"
        folders:

        - title: "__construct()"
          url: "#eiseitemtraceable_fn___construct"

        - title: "update()"
          url: "#eiseitemtraceable_fn_update"

        - title: "updateTable()"
          url: "#eiseitemtraceable_fn_updatetable"

        - title: "updateFullEdit()"
          url: "#eiseitemtraceable_fn_updatefulledit"

        - title: "superaction()"
          url: "#eiseitemtraceable_fn_superaction"

        - title: "undo()"
          url: "#eiseitemtraceable_fn_undo"

        - title: "updateMultiple()"
          url: "#eiseitemtraceable_fn_updatemultiple"

        - title: "delete()"
          url: "#eiseitemtraceable_fn_delete"

        - title: "RLAByMatrix()"
          url: "#eiseitemtraceable_fn_rlabymatrix"

        - title: "getList()"
          url: "#eiseitemtraceable_fn_getlist"

        - title: "getNewItemID()"
          url: "#eiseitemtraceable_fn_getnewitemid"

        - title: "newItem()"
          url: "#eiseitemtraceable_fn_newitem"

        - title: "insert()"
          url: "#eiseitemtraceable_fn_insert"

        - title: "doAction()"
          url: "#eiseitemtraceable_fn_doaction"

        - title: "updateRolesVirtual()"
          url: "#eiseitemtraceable_fn_updaterolesvirtual"

        - title: "getVirtualRoleMembers()"
          url: "#eiseitemtraceable_fn_getvirtualrolemembers"

        - title: "updateUnfinishedActions()"
          url: "#eiseitemtraceable_fn_updateunfinishedactions"

        - title: "updateAction()"
          url: "#eiseitemtraceable_fn_updateaction"

        - title: "getData()"
          url: "#eiseitemtraceable_fn_getdata"

        - title: "getAllData()"
          url: "#eiseitemtraceable_fn_getalldata"

        - title: "refresh()"
          url: "#eiseitemtraceable_fn_refresh"

        - title: "backup()"
          url: "#eiseitemtraceable_fn_backup"

        - title: "restore()"
          url: "#eiseitemtraceable_fn_restore"

        - title: "beforeActionPlan()"
          url: "#eiseitemtraceable_fn_beforeactionplan"

        - title: "onActionPlan()"
          url: "#eiseitemtraceable_fn_onactionplan"

        - title: "onActionStart()"
          url: "#eiseitemtraceable_fn_onactionstart"

        - title: "onActionFinish()"
          url: "#eiseitemtraceable_fn_onactionfinish"

        - title: "onActionCancel()"
          url: "#eiseitemtraceable_fn_onactioncancel"

        - title: "onActionUndo()"
          url: "#eiseitemtraceable_fn_onactionundo"

        - title: "onStatusArrival()"
          url: "#eiseitemtraceable_fn_onstatusarrival"

        - title: "onStatusDeparture()"
          url: "#eiseitemtraceable_fn_onstatusdeparture"

        - title: "processCheckmarks()"
          url: "#eiseitemtraceable_fn_processcheckmarks"

        - title: "form()"
          url: "#eiseitemtraceable_fn_form"

        - title: "form4list()"
          url: "#eiseitemtraceable_fn_form4list"

        - title: "getStatusField()"
          url: "#eiseitemtraceable_fn_getstatusfield"

        - title: "getActionLogSkeleton()"
          url: "#eiseitemtraceable_fn_getactionlogskeleton"

        - title: "getChecklistSkeleton()"
          url: "#eiseitemtraceable_fn_getchecklistskeleton"

        - title: "getActionLog()"
          url: "#eiseitemtraceable_fn_getactionlog"

        - title: "getFields()"
          url: "#eiseitemtraceable_fn_getfields"

        - title: "getAttributeFields()"
          url: "#eiseitemtraceable_fn_getattributefields"

        - title: "arrActionButtons()"
          url: "#eiseitemtraceable_fn_arractionbuttons"

        - title: "showActionButtons()"
          url: "#eiseitemtraceable_fn_showactionbuttons"

        - title: "getActionButtons()"
          url: "#eiseitemtraceable_fn_getactionbuttons"

        - title: "showActionRadios()"
          url: "#eiseitemtraceable_fn_showactionradios"

        - title: "showStatusLog()"
          url: "#eiseitemtraceable_fn_showstatuslog"

        - title: "showUnfinishedActions()"
          url: "#eiseitemtraceable_fn_showunfinishedactions"

        - title: "showActionInfo()"
          url: "#eiseitemtraceable_fn_showactioninfo"

        - title: "getTracedData()"
          url: "#eiseitemtraceable_fn_gettraceddata"

        - title: "getActionDetails()"
          url: "#eiseitemtraceable_fn_getactiondetails"

        - title: "getActionData()"
          url: "#eiseitemtraceable_fn_getactiondata"

        - title: "getDropDownText()"
          url: "#eiseitemtraceable_fn_getdropdowntext"

        - title: "get_whos_next()"
          url: "#eiseitemtraceable_fn_get_whos_next"

        - title: "getNextBiggerStatus()"
          url: "#eiseitemtraceable_fn_getnextbiggerstatus"

        - title: "getWhosNextStatus()"
          url: "#eiseitemtraceable_fn_getwhosnextstatus"

      - title: "private methods:"
        folders:

        - title: "init()"
          url: "#eiseitemtraceable_fn_init"




    - title: "class eiseAction:"
      url: "#cls_eiseaction"
      folders:

      - title: "public properties:"
        folders:

        - title: "$arrAction"
          url: "#eiseaction_prop_arraction"

      - title: "public methods:"
        folders:

        - title: "__construct()"
          url: "#eiseaction_fn___construct"

        - title: "execute()"
          url: "#eiseaction_fn_execute"

        - title: "update()"
          url: "#eiseaction_fn_update"

        - title: "add()"
          url: "#eiseaction_fn_add"

        - title: "start()"
          url: "#eiseaction_fn_start"

        - title: "validate()"
          url: "#eiseaction_fn_validate"

        - title: "finish()"
          url: "#eiseaction_fn_finish"

        - title: "cancel()"
          url: "#eiseaction_fn_cancel"

        - title: "checkTimeLine()"
          url: "#eiseaction_fn_checktimeline"

        - title: "checkMandatoryFields()"
          url: "#eiseaction_fn_checkmandatoryfields"

        - title: "checkPermissions()"
          url: "#eiseaction_fn_checkpermissions"




sidebar_right:
  title: "By category"
  class: "rsd-navbar-right"
  id: "rsd-navbar_right"
  folders:
    - title: "Backup and Restore"
      folders:

      - title: "eiseItemTraceable::backup()"
        url: "#eiseitemtraceable_fn_backup"
        folders:

      - title: "eiseItemTraceable::restore()"
        url: "#eiseitemtraceable_fn_restore"
        folders:

    - title: "Configuration"
      folders:

      - title: "eiseItem::__construct()"
        url: "#eiseitem_fn___construct"
        folders:

      - title: "eiseItem::$conf"
        url: "#eiseitem_prop_conf"
        folders:

      - title: "eiseItem::$intra"
        url: "#eiseitem_prop_intra"
        folders:

      - title: "eiseItem::$oSQL"
        url: "#eiseitem_prop_osql"
        folders:

      - title: "eiseItem::$table"
        url: "#eiseitem_prop_table"
        folders:

      - title: "eiseItemTraceable::__construct()"
        url: "#eiseitemtraceable_fn___construct"
        folders:

      - title: "eiseItemTraceable::$conf_default"
        url: "#eiseitemtraceable_prop_conf_default"
        folders:

      - title: "eiseItemTraceable::$ent"
        url: "#eiseitemtraceable_prop_ent"
        folders:

      - title: "eiseItemTraceable::init()"
        url: "#eiseitemtraceable_fn_init"
        folders:

    - title: "Data Display"
      folders:

      - title: "eiseItem::form()"
        url: "#eiseitem_fn_form"
        folders:

      - title: "eiseItem::formFiles()"
        url: "#eiseitem_fn_formfiles"
        folders:

      - title: "eiseItem::formMessages()"
        url: "#eiseitem_fn_formmessages"
        folders:

      - title: "eiseItem::getButtons()"
        url: "#eiseitem_fn_getbuttons"
        folders:

      - title: "eiseItem::getFields()"
        url: "#eiseitem_fn_getfields"
        folders:

      - title: "eiseItemTraceable::arrActionButtons()"
        url: "#eiseitemtraceable_fn_arractionbuttons"
        folders:

      - title: "eiseItemTraceable::form()"
        url: "#eiseitemtraceable_fn_form"
        folders:

      - title: "eiseItemTraceable::form4list()"
        url: "#eiseitemtraceable_fn_form4list"
        folders:

      - title: "eiseItemTraceable::get_whos_next()"
        url: "#eiseitemtraceable_fn_get_whos_next"
        folders:

      - title: "eiseItemTraceable::getActionButtons()"
        url: "#eiseitemtraceable_fn_getactionbuttons"
        folders:

      - title: "eiseItemTraceable::getActionData()"
        url: "#eiseitemtraceable_fn_getactiondata"
        folders:

      - title: "eiseItemTraceable::getActionDetails()"
        url: "#eiseitemtraceable_fn_getactiondetails"
        folders:

      - title: "eiseItemTraceable::getActionLog()"
        url: "#eiseitemtraceable_fn_getactionlog"
        folders:

      - title: "eiseItemTraceable::getActionLogSkeleton()"
        url: "#eiseitemtraceable_fn_getactionlogskeleton"
        folders:

      - title: "eiseItemTraceable::getAttributeFields()"
        url: "#eiseitemtraceable_fn_getattributefields"
        folders:

      - title: "eiseItemTraceable::getChecklistSkeleton()"
        url: "#eiseitemtraceable_fn_getchecklistskeleton"
        folders:

      - title: "eiseItemTraceable::getDropDownText()"
        url: "#eiseitemtraceable_fn_getdropdowntext"
        folders:

      - title: "eiseItemTraceable::getFields()"
        url: "#eiseitemtraceable_fn_getfields"
        folders:

      - title: "eiseItemTraceable::getList()"
        url: "#eiseitemtraceable_fn_getlist"
        folders:

      - title: "eiseItemTraceable::getNextBiggerStatus()"
        url: "#eiseitemtraceable_fn_getnextbiggerstatus"
        folders:

      - title: "eiseItemTraceable::getStatusField()"
        url: "#eiseitemtraceable_fn_getstatusfield"
        folders:

      - title: "eiseItemTraceable::getTracedData()"
        url: "#eiseitemtraceable_fn_gettraceddata"
        folders:

      - title: "eiseItemTraceable::getWhosNextStatus()"
        url: "#eiseitemtraceable_fn_getwhosnextstatus"
        folders:

      - title: "eiseItemTraceable::showActionButtons()"
        url: "#eiseitemtraceable_fn_showactionbuttons"
        folders:

      - title: "eiseItemTraceable::showActionInfo()"
        url: "#eiseitemtraceable_fn_showactioninfo"
        folders:

      - title: "eiseItemTraceable::showActionRadios()"
        url: "#eiseitemtraceable_fn_showactionradios"
        folders:

      - title: "eiseItemTraceable::showStatusLog()"
        url: "#eiseitemtraceable_fn_showstatuslog"
        folders:

      - title: "eiseItemTraceable::showUnfinishedActions()"
        url: "#eiseitemtraceable_fn_showunfinishedactions"
        folders:

    - title: "Data Handling"
      folders:

      - title: "eiseItem::convertBooleanData()"
        url: "#eiseitem_fn_convertbooleandata"
        folders:

      - title: "eiseItem::delete()"
        url: "#eiseitem_fn_delete"
        folders:

      - title: "eiseItem::getData()"
        url: "#eiseitem_fn_getdata"
        folders:

      - title: "eiseItem::getDelta()"
        url: "#eiseitem_fn_getdelta"
        folders:

      - title: "eiseItem::getIDFromQueryString()"
        url: "#eiseitem_fn_getidfromquerystring"
        folders:

      - title: "eiseItem::getPKFields()"
        url: "#eiseitem_fn_getpkfields"
        folders:

      - title: "eiseItem::getSQLWhere()"
        url: "#eiseitem_fn_getsqlwhere"
        folders:

      - title: "eiseItem::getURI()"
        url: "#eiseitem_fn_geturi"
        folders:

      - title: "eiseItem::$id"
        url: "#eiseitem_prop_id"
        folders:

      - title: "eiseItem::insert()"
        url: "#eiseitem_fn_insert"
        folders:

      - title: "eiseItem::$item"
        url: "#eiseitem_prop_item"
        folders:

      - title: "eiseItem::preventRecursiveHooks()"
        url: "#eiseitem_fn_preventrecursivehooks"
        folders:

      - title: "eiseItem::refresh()"
        url: "#eiseitem_fn_refresh"
        folders:

      - title: "eiseItemTraceable::$defaultDataToObtain"
        url: "#eiseitemtraceable_prop_defaultdatatoobtain"
        folders:

      - title: "eiseItemTraceable::delete()"
        url: "#eiseitemtraceable_fn_delete"
        folders:

      - title: "eiseItemTraceable::getAllData()"
        url: "#eiseitemtraceable_fn_getalldata"
        folders:

      - title: "eiseItemTraceable::getData()"
        url: "#eiseitemtraceable_fn_getdata"
        folders:

      - title: "eiseItemTraceable::getNewItemID()"
        url: "#eiseitemtraceable_fn_getnewitemid"
        folders:

      - title: "eiseItemTraceable::insert()"
        url: "#eiseitemtraceable_fn_insert"
        folders:

      - title: "eiseItemTraceable::newItem()"
        url: "#eiseitemtraceable_fn_newitem"
        folders:

      - title: "eiseItemTraceable::refresh()"
        url: "#eiseitemtraceable_fn_refresh"
        folders:

      - title: "eiseItemTraceable::update()"
        url: "#eiseitemtraceable_fn_update"
        folders:

      - title: "eiseItemTraceable::updateAction()"
        url: "#eiseitemtraceable_fn_updateaction"
        folders:

      - title: "eiseItemTraceable::updateFullEdit()"
        url: "#eiseitemtraceable_fn_updatefulledit"
        folders:

      - title: "eiseItemTraceable::updateMultiple()"
        url: "#eiseitemtraceable_fn_updatemultiple"
        folders:

      - title: "eiseItemTraceable::updateTable()"
        url: "#eiseitemtraceable_fn_updatetable"
        folders:

      - title: "eiseItemTraceable::updateUnfinishedActions()"
        url: "#eiseitemtraceable_fn_updateunfinishedactions"
        folders:

      - title: "eiseItem::update()"
        url: "#eiseitem_fn_update"
        folders:

      - title: "eiseItem::updateTable()"
        url: "#eiseitem_fn_updatetable"
        folders:

    - title: "Events and Actions"
      folders:

      - title: "eiseAction::__construct()"
        url: "#eiseaction_fn___construct"
        folders:

      - title: "eiseAction::add()"
        url: "#eiseaction_fn_add"
        folders:

      - title: "eiseAction::cancel()"
        url: "#eiseaction_fn_cancel"
        folders:

      - title: "eiseAction::checkMandatoryFields()"
        url: "#eiseaction_fn_checkmandatoryfields"
        folders:

      - title: "eiseAction::checkPermissions()"
        url: "#eiseaction_fn_checkpermissions"
        folders:

      - title: "eiseAction::checkTimeLine()"
        url: "#eiseaction_fn_checktimeline"
        folders:

      - title: "eiseAction::execute()"
        url: "#eiseaction_fn_execute"
        folders:

      - title: "eiseAction::finish()"
        url: "#eiseaction_fn_finish"
        folders:

      - title: "eiseAction::start()"
        url: "#eiseaction_fn_start"
        folders:

      - title: "eiseAction::update()"
        url: "#eiseaction_fn_update"
        folders:

      - title: "eiseAction::validate()"
        url: "#eiseaction_fn_validate"
        folders:

      - title: "eiseItem::getButtons()"
        url: "#eiseitem_fn_getbuttons"
        folders:

      - title: "eiseItemTraceable::arrActionButtons()"
        url: "#eiseitemtraceable_fn_arractionbuttons"
        folders:

      - title: "eiseItemTraceable::beforeActionPlan()"
        url: "#eiseitemtraceable_fn_beforeactionplan"
        folders:

      - title: "eiseItemTraceable::$currentAction"
        url: "#eiseitemtraceable_prop_currentaction"
        folders:

      - title: "eiseItemTraceable::doAction()"
        url: "#eiseitemtraceable_fn_doaction"
        folders:

      - title: "eiseItemTraceable::get_whos_next()"
        url: "#eiseitemtraceable_fn_get_whos_next"
        folders:

      - title: "eiseItemTraceable::getActionData()"
        url: "#eiseitemtraceable_fn_getactiondata"
        folders:

      - title: "eiseItemTraceable::getActionDetails()"
        url: "#eiseitemtraceable_fn_getactiondetails"
        folders:

      - title: "eiseItemTraceable::getNextBiggerStatus()"
        url: "#eiseitemtraceable_fn_getnextbiggerstatus"
        folders:

      - title: "eiseItemTraceable::getVirtualRoleMembers()"
        url: "#eiseitemtraceable_fn_getvirtualrolemembers"
        folders:

      - title: "eiseItemTraceable::getWhosNextStatus()"
        url: "#eiseitemtraceable_fn_getwhosnextstatus"
        folders:

      - title: "eiseItemTraceable::onActionCancel()"
        url: "#eiseitemtraceable_fn_onactioncancel"
        folders:

      - title: "eiseItemTraceable::onActionFinish()"
        url: "#eiseitemtraceable_fn_onactionfinish"
        folders:

      - title: "eiseItemTraceable::onActionPlan()"
        url: "#eiseitemtraceable_fn_onactionplan"
        folders:

      - title: "eiseItemTraceable::onActionStart()"
        url: "#eiseitemtraceable_fn_onactionstart"
        folders:

      - title: "eiseItemTraceable::onActionUndo()"
        url: "#eiseitemtraceable_fn_onactionundo"
        folders:

      - title: "eiseItemTraceable::onStatusArrival()"
        url: "#eiseitemtraceable_fn_onstatusarrival"
        folders:

      - title: "eiseItemTraceable::onStatusDeparture()"
        url: "#eiseitemtraceable_fn_onstatusdeparture"
        folders:

      - title: "eiseItemTraceable::processCheckmarks()"
        url: "#eiseitemtraceable_fn_processcheckmarks"
        folders:

      - title: "eiseItemTraceable::RLAByMatrix()"
        url: "#eiseitemtraceable_fn_rlabymatrix"
        folders:

      - title: "eiseItemTraceable::showActionButtons()"
        url: "#eiseitemtraceable_fn_showactionbuttons"
        folders:

      - title: "eiseItemTraceable::$staID"
        url: "#eiseitemtraceable_prop_staid"
        folders:

      - title: "eiseItemTraceable::superaction()"
        url: "#eiseitemtraceable_fn_superaction"
        folders:

      - title: "eiseItemTraceable::undo()"
        url: "#eiseitemtraceable_fn_undo"
        folders:

      - title: "eiseItemTraceable::update()"
        url: "#eiseitemtraceable_fn_update"
        folders:

      - title: "eiseItemTraceable::updateAction()"
        url: "#eiseitemtraceable_fn_updateaction"
        folders:

      - title: "eiseItemTraceable::updateRolesVirtual()"
        url: "#eiseitemtraceable_fn_updaterolesvirtual"
        folders:

      - title: "eiseItemTraceable::updateUnfinishedActions()"
        url: "#eiseitemtraceable_fn_updateunfinishedactions"
        folders:

      - title: "eiseItemTraceable::$virtualRoleMembers"
        url: "#eiseitemtraceable_prop_virtualrolemembers"
        folders:

    - title: "Files"
      folders:

      - title: "eiseItem::afterAttachFile()"
        url: "#eiseitem_fn_afterattachfile"
        folders:

      - title: "eiseItem::attachFile()"
        url: "#eiseitem_fn_attachfile"
        folders:

      - title: "eiseItem::beforeDeleteFile()"
        url: "#eiseitem_fn_beforedeletefile"
        folders:

      - title: "eiseItem::deleteFile()"
        url: "#eiseitem_fn_deletefile"
        folders:

      - title: "eiseItem::formFiles()"
        url: "#eiseitem_fn_formfiles"
        folders:

      - title: "eiseItem::getFile()"
        url: "#eiseitem_fn_getfile"
        folders:

      - title: "eiseItem::getFiles()"
        url: "#eiseitem_fn_getfiles"
        folders:

    - title: "Messages"
      folders:

      - title: "eiseItem::formMessages()"
        url: "#eiseitem_fn_formmessages"
        folders:

      - title: "eiseItem::getMessages()"
        url: "#eiseitem_fn_getmessages"
        folders:

      - title: "eiseItem::sendMessage()"
        url: "#eiseitem_fn_sendmessage"
        folders:

---

## <a name="cls_eiseitem"></a>class __eiseItem__

This class is a shell for a single table record.
It has few basic properties that define title, table(s), fields, etc.

### <a name="eiseitem_prop_conf"></a>public property __$conf__

This is configuration array for an item. Exact configuration parameters list is:

- 'name' - key entity identificator, works as the base for table name, form script name, etc, e.g. 'item'. Mandatory.
- 'title' - entity name in English, e.g. 'the Item'
- 'titleLocal' - entity name in local language, e.g. 'Штуковина' (A Thing) in Russian
- 'table' - table name. If not set, it is calculated from entity name: e.g. 'tbl_item'
- 'prefix' - table prefix, e.g. 'itm'. If not set - it is calculated from table using getTableInfo() function
- 'form' - PHP script name for form. E.g. 'item_form.php'. Not mandatory. If not set, it is calculated from 'name'.
- 'list' - PHP script name for form. E.g. 'item_list.php'. Not mandatory. If not set, it is calculated from 'name'.
- 'flagFormShowAllFields' - this parameter is used in function [eiseItem::getFields()](#eiseitem-getfields), see ref.

```php
public $conf = array(
	'title' => 'The Item'
	, 'titleLocal' => 'Штуковина'
	, 'name' => 'item'
	, 'prefix' => 'itm'
	, 'table' => 'tbl_item'
	, 'form' => 'item_form.php'
	, 'list' => 'item_list.php'
	, 'flagFormShowAllFields' => false
	);
```

__Category__: Configuration  



### <a name="eiseitem_prop_id"></a>public property __$id__

Unique identity of the item.

__Category__: Data Handling  



### <a name="eiseitem_prop_item"></a>public property __$item__

The array with item data. To be filled inside [eiseItem::getData()](#eiseitem-getdata). 

Usually and by default this array consists of single table record data obtainted with `mysqli::fetch_assoc()` function.

Example: `$title = $objThing->item['thnTitle'];`

__Category__: Data Handling  



### <a name="eiseitem_prop_table"></a>public property __$table__

The array with the table information. To be filled inside [eiseItem::getData()](#eiseitem-getdata).

__Category__: Configuration  



### <a name="eiseitem_prop_intra"></a>public property __$intra__

```eiseIntra``` object that's been used on item creation. To be set in constructor.

__Category__: Configuration  



### <a name="eiseitem_prop_osql"></a>public property __$oSQL__

```eiseSQL``` object that's been used on item creation. Normally obtained from ```eiseIntra```, but it could be overridden with ```$conf['sql]```. Set inside the constructor.

__Category__: Configuration  



### <a name="eiseitem_fn___construct"></a>public function ____construct()__

Class constructor. Can be called without any paramemters. Constructor obtains info on table, obtains data and entity configuration.

__Parameters__: 

* 	__$id__ (variant) - item unique identificator.
* 	__$conf__ (array) - associative array with configuration options. Defaults are set at [eiseItem::$conf](#eiseitem-conf)

__Category__: Configuration  



### <a name="eiseitem_fn_getidfromquerystring"></a>public function __getIDFromQueryString()__

This function gets PK (primary key) values from GET or POST query strings.

__Category__: Data Handling  



### <a name="eiseitem_fn_getsqlwhere"></a>public function __getSQLWhere($pkValue = null)__

This function returns SQL search condition basing on primary keys.

__Parameters__: 

* 	$pkValue = null

__Category__: Data Handling  



### <a name="eiseitem_fn_geturi"></a>public function __getURI( $pkValue = null )__

This function returns URI for a form basing on primary keys.

__Parameters__: 

* 	$pkValue = null

__Category__: Data Handling  



### <a name="eiseitem_fn_getdata"></a>public function __getData($pk = null)__

Reads record from database table $conf['table'] associated with current $pk.

__Parameters__: 

* 	$pk = null

__Category__: Data Handling  



### <a name="eiseitem_fn_refresh"></a>public function __refresh()__

Calls ```$this->getData()``` so refreshes ```$this->item``` property.

__Category__: Data Handling  



### <a name="eiseitem_fn_form"></a>public function __form( $fields = null, $conf = array() )__

Returns form HTML. By default it contains DataAction and Primary Keys inputs.

__Parameters__: 

* 	$fields = null
* 	$conf = array()

__Category__: Data Display  



### <a name="eiseitem_fn_getpkfields"></a>public function __getPKFields()__

Returns HTML for hidden fields that correspond to PK

__Category__: Data Handling  



### <a name="eiseitem_fn_getfields"></a>public function __getFields($aFields = null)__

Returns HTML with fields to be displayed on the form

__Parameters__: 

* 	$aFields = null

__Category__: Data Display  



### <a name="eiseitem_fn_getbuttons"></a>public function __getButtons()__

Returns HTML for buttons (submit, delete)

__Category__: Data Display
Events and Actions  



### <a name="eiseitem_fn_insert"></a>public function __insert($newData)__

To be triggered on DataAction=insert or REST POST/PUT query. Current function does nothing with the data, it just set some headers for web user to be returned to item form. Normally it should be overridden.

__Parameters__: 

* 	$newData

__Category__: Data Handling  



### <a name="eiseitem_fn_update"></a>public function __update($newData)__

To be triggered on DataAction=update or REST POST/PUT query. Current function does nothing with the data, it just set some headers for web user to be returned to item form. Normally it should be overridden.

__Parameters__: 

* 	$newData

__Category__: Data Handling  



### <a name="eiseitem_fn_delete"></a>public function __delete()__

To be triggered by default on DataAction=delete or REST DELETE query. Current function DELETEs the record and set some headers for web user to be returned to item list.

__Category__: Data Handling  



### <a name="eiseitem_fn_preventrecursivehooks"></a>public function __preventRecursiveHooks(&$nd = array())__

This function prevents recursive hooks when object instances are created within existing hook (e.g. when you create the object inside the object with some DataAction like 'insert' or 'update'). Function should be called right after hook function starts.

__Parameters__: 

* 	$nd = array()

__Category__: Data Handling  



### <a name="eiseitem_fn_updatetable"></a>public function __updateTable()__

This function transforms data from the input array into UPDATE SQL and runs it. SQL for data fields is obtained from `eiseItem::getSQLFields()`. Also it calculates delta and returns it.

__Parameters__: 

* 	$nd
* 	$flagDontConvertToSQL = false

__Category__: Data Handling  



### <a name="eiseitem_fn_getdelta"></a>public function __getDelta($old, $new)__

This function calculates difference between two associative arrays using `array_diff_assoc()`. All numeric data is converted to `double` data type.

__Parameters__: 

* 	$old
* 	$new

__Category__: Data Handling  



### <a name="eiseitem_fn_convertbooleandata"></a>public function __convertBooleanData()__

This function fixes the situation when booelan (checkbox) field presents on the form but being unchecked, it doesn't appear in $nd ($_POST) array of data. This function returns fixed array of $nd, where unchecked elements are present with value of '0' (string zero). So [eiseItem::updateTable()](#eiseitem-updatetable) function updates these fields with 0 values. Function ```convertBooleanData()``` should be called prior to ```updateTable()```.

__Parameters__: 

* 	__$nd__ (array) - new data, it might be a copy of $_POST array.
* 	__$aBooleanFields__ (array) - list of boolean fields to be fixed. If not set - it is filled from the $table property.

__Returns__: array - updated $nd, all unchecked and therefore missing boolean fields presents there with '0' (string with zero symbol) values.

__Category__: Data Handling  



### <a name="eiseitem_fn_attachfile"></a>public function __attachFile($nd)__

This function attaches a set of files uploaded by end user via web interface. NOTE: If you want to use it with REST API, you should overrride global `$_FILES` array to behave closely to original.

Function `attachFile()` saves the file to a disk and adds a record to 'stbl_file'. Uploaded files will be saved in the directory specified in 'stpFilesPath' settings variable, combined with 'YYYY/mm' and file GUID. Example: `/mnt/wwwfiles/somesystem/2023/10/18/0000938b-8fe5-11ec-a765-000d3ad81bf0`. If 'stpFilesPath' set to '/dev/null' file will not be actually saved but record will be created.

Each file input on the web form should be named as "attachment[]": `<input name="attachment[]">`. This name can not be overridden.

If you need more control on file attachemnt process you can redefine class functions `eiseItem::beforeAttachFile()` and `eiseItem::afterAttachFile()`.

After completion this function returns the list of files (list of records from stbl_file with linked to current entity item).

__Parameters__: 

* 	__$nd__ (array) - new data, it might be a copy of $_POST array.

__Category__: Files  



### <a name="eiseitem_fn_deletefile"></a>public function __deleteFile($q)__

Function `deleteFile()` detaches file from current entity instance: it removes stbl_file record and unlinks the file on a disk.

For more control on detachment process you can redefine `eiseItem::beforeDeleteFile()` function.

__Parameters__: 

* 	__$q__ (array) - new data, it might be a copy of $_POST array.

__Category__: Files  



### <a name="eiseitem_fn_beforeattachfile"></a>public function __beforeAttachFile()__

```beforeAttachFile()``` is allowed to trow exceptions in case when uploaded file has wrong type, etc. So wrong file can be excluded from upload routine.

 @category Files

__Parameters__: 

* 	$filePath
* 	$fileName
* 	$fileMIME
* 	$fileGUID



### <a name="eiseitem_fn_afterattachfile"></a>public function __afterAttachFile()__

```afterAttachFile()``` runs when upload routine in completed for given file: file is copied and database record created. The best for post-processing.

__Parameters__: 

* 	$filePath
* 	$fileName
* 	$fileMIME
* 	$fileGUID

__Category__: Files  



### <a name="eiseitem_fn_beforedeletefile"></a>public function __beforeDeleteFile($filGUID)__

This function can be used both to prevent file deletion (with an exception) and post-delete file hanling.

__Parameters__: 

* 	$filGUID

__Category__: Files  



### <a name="eiseitem_fn_getfiles"></a>public function __getFiles($opts = array())__

This function obtains file list for current entity item - just an array of records from stbl_file.

__Parameters__: 

* 	__$opts__ (array) - when key 'selectedGUIDs' is set it returns only files with GUIDs listed in this item (array of GUIDs)

__Returns__: string - JSON with file list.

__Category__: Files  



### <a name="eiseitem_fn_getfile"></a>public function __getFile()__

This function obtains file path from stbl_file for given file GUID and then it echoes file contents with [eiseIntra::file()](#eiseintra-file) function.

__Parameters__: 

* 	__$q__ (array) - associative array with query data. File GUID is stored under 'filGUID' key.

__Category__: Files  



### <a name="eiseitem_fn_formfiles"></a>public function __formFiles()__

This function returns HTML for file upload/file list dialog.

__Returns__: string - HTML, normally hidden, to be shown with JS.

__Category__: Files
Data Display  



### <a name="eiseitem_fn_formmessages"></a>public function __formMessages()__

This function returns HTML for message send/message list form. Noramlly hidden on the form, to be shown with JS.

__Returns__: string - HTML.

__Category__: Messages
Data Display  



### <a name="eiseitem_fn_getmessages"></a>public function __getMessages()__

This function obtains message list for current entity item - just an array of records from stbl_message.

__Returns__: string - JSON with message list.

__Category__: Messages  



### <a name="eiseitem_fn_sendmessage"></a>public function __sendMessage($nd)__

This function does not actually send a message, it just adds a record to stbl_message (message queue). Then this table is being scanned with [eiseItem::sendMessages()](#eiseitem-sendmessages) and any unsent messages will be physically sent and marked as 'sent' afterwards.

__Parameters__: 

* 	__$nd__ (array) - message data, it can be a copy of $_POST array.

__Category__: Messages  



### <a name="eiseitem_fn_sendmessages"></a>static function __sendMessages($conf)__

This function scans stbl_message and sends any unsent message. It uses eiseMail library for send routines.

__Parameters__: 

* 	__$conf__ (array) - an array with various send options:
 - 'authenticate' ['email', 'onbehalf'] - when 'email', it uses sender's email to authenticate on SMTP server. When 'onbehalf' - it uses `$conf['login']` and `$conf['password']` for SMTP authentication. In other cases it uses 'usrID' and 'msgPassword' for authentication.






## <a name="cls_eiseitemtraceable"></a>class __eiseItemTraceable__

This class incapsulates base functionality of single entity item.

__Uses__: eiseItem
eiseAction  
__Package__: eiseIntra  

### <a name="eiseitemtraceable_prop_ent"></a>public property __$ent__

This property is used to store the entity properties of the item. It is being filled in ```init()``` method.

__Category__: Configuration  



### <a name="eiseitemtraceable_prop_staid"></a>public property __$staID__

```$staID``` is the current status ID of the item. It is set after the item is created or loaded.

__Category__: Events and Actions  



### <a name="eiseitemtraceable_prop_currentaction"></a>public property __$currentAction__

This property is used to store the current action that is being performed on the item. It is set when the item is updated, deleted or any other action is performed.

__Category__: Events and Actions  



### <a name="eiseitemtraceable_prop_virtualrolemembers"></a>public property __$virtualRoleMembers__

Array of virtual role members - key is role ID, value is array of user IDs. Can be used to cache virtual role members.

__Category__: Events and Actions  



### <a name="eiseitemtraceable_prop_defaultdatatoobtain"></a>protected property __$defaultDataToObtain__

This property is used to specify which data should be obtained when the item is loaded. It is used in the ```getAllData()``` method to specify which data should be retrieved from the database.

Default values are: 
- 'Text' - text representation of reference data to be obtained from reference tables, 
- 'ACL' - action log, 
- 'STL' - status log,
- 'files' - files related to the item,
- 'messages' - messages related to the item.

```php
protected $defaultDataToObtain = array('Text', 'ACL', 'STL', 'files', 'messages');
```

__Category__: Data Handling  



### <a name="eiseitemtraceable_prop_conf_default"></a>private property __$conf_default__

This property is used to store the configuration of the item object. It is set in the constructor and can be overridden by passing a configuration array to the constructor.

```php
private $conf_default = array(
    'flagDontCacheConfig' => false, // if set to true, the configuration will not be cached in the session
    'aExcludeReads' => array(), // array of read methods to exclude from the item object
    'aExcludeActions' => array(), // array of action methods to exclude from the item object
    'entID' => null, // entity ID of the item that this object will represent
    'entTable' => null, // entity table name, e.g. 'stbl_entity_item'
    'entTitle' => null, // entity title, e.g. 'Entity Item'
    'entTitleLocal' => null, // entity title in local language, e.g. 'Entity Item Local'
    'entTitleMul' => null, // entity title for multiple items, e.g. 'Entity Items'
    'entTitleLocalMul' => null, // entity title in local language for multiple items, e.g. 'Entity Items Local'
    'entPrefix' => null, // entity prefix, e.g. 'ent'

    'radios' => array(), // array of radio buttons to be shown in the item form

    'CHK' => array(), // checklists data
);
```

__Category__: Configuration  



### <a name="eiseitemtraceable_fn___construct"></a>public function ____construct()__

This constructor initializes the item object. If ```$id``` is not set, this will create an empty object with functionality that can be used to obtain list, craet new item etc.

The constructor requires ```$entID``` to be set in the configuration array. This is the entity ID of the item that this object will represent. Entity item configuration is obtained from the database and merged with the configuration array passed to the constructor.

Also this constructor defines Intra's DataAction and DataRead methods for the item object, so that it can be used to perform actions and read data from the database and pass it to the user.

__Parameters__: 

* 	__$id__ (mixed) - Item ID. If not set, this will create an empty item object.
* 	__$conf__ (array) - Configuration array. If not set, this will use default configuration.

__Category__: Configuration  



### <a name="eiseitemtraceable_fn_update"></a>public function __update($nd)__

This method does the same as original method from ```eiseItem``` class: it updated the item in the database.

In addition to that, it updates the master table, updates unfinished actions, updates roles virtual and performs the action.

```$nd``` is normally the ```$_POST``` array or it could be artificially created array with data to update the item with. It may contain the following sections:
 - item data to update, e.g. 'itmTitle', 'itmComments', 'itmBillingDate', etc.
 - action data to perform, e.g. 'actID', 'aclNewStatusID', 'aclATA', 'aclComments' etc.
 - action-related data that comes with action. It comes with GUID-prefixed keys, e.g. '00418f83-2cc1-11ec-b619-000d3ad81bf0_itmBillingDate'. GUIDs are Action Log IDs from ```stbl_action_log``` table.

__Parameters__: 

* 	__$nd__ (array) - Array of data to update the item with.

__Category__: Data Handling
Events and Actions  



### <a name="eiseitemtraceable_fn_updatetable"></a>public function __updateTable()__

Function ```updateTable``` updates the master table with data from the array ```$nd```. It also converts some attributes to foreign keys if they are of type 'ajax_dropdown', 'combobox' or 'radio'.

__Parameters__: 

* 	$nd
* 	$flagDontConvertToSQL = false

__Category__: Data Handling  



### <a name="eiseitemtraceable_fn_updatefulledit"></a>public function __updateFullEdit($nd)__

This method is called when the item is updated with full edit form. It updates the master table and updates unfinished actions.

__Parameters__: 

* 	__$nd__ (array) - Array of data to update the item with.

__Category__: Data Handling  



### <a name="eiseitemtraceable_fn_superaction"></a>public function __superaction($nd)__

**Suparaction** is a special action that allows to put the item into any state. It is used for administrative purposes, e.g. to change the status of the item, add comments, etc.

__Parameters__: 

* 	$nd

__Category__: Events and Actions  



### <a name="eiseitemtraceable_fn_undo"></a>public function __undo($nd)__

This method undoes the last action performed on the item. It is used to revert the item to the state before the last action was performed.

It removes the last action from the action log, updates the item data with the data from the last action, and updates the status of the item to the status before the last action.

Record items from status log are also removed, so that the item is in the state before the last action was performed.

__Parameters__: 

* 	__$nd__ (array) - Array of data to update the item with. It is not used in this method, but it is required for compatibility with other methods.

__Category__: Events and Actions  



### <a name="eiseitemtraceable_fn_updatemultiple"></a>public function __updateMultiple($nd)__

This method updates multiple items of given class in the database when user submits multi-edit form on item list. Non-filled fields are ignored, so that only fields that are filled in the form are updated.

After item update it just dies, so this function should be called from the batch processing script.

__Parameters__: 

* 	__$nd__ (array) - Array of data to update the items with. It should contain the primary key list of the items to update in the format 'ID1|ID2|ID3', where ID1, ID2, ID3 are the IDs of the items to update.

__Uses__: eiseIntraBatch  
__Category__: Data Handling  



### <a name="eiseitemtraceable_fn_delete"></a>public function __delete()__

Method ```delete()``` deletes the item from the database. It also deletes all related action and status logs, if configured to do so.

Normally it triggers for 'delete' Data Action when user clicks 'Delete' button on the item form. It is also can be called from the batch processing script when user selects 'Delete' action on the selected item list. 

If you need to run multiple deletes in a single transaction, you should set ```$this->conf['flagNoDeleteTransation']``` to ```true``` before calling this method. This will prevent the method from starting a new transaction and will allow you to run multiple deletes in a single transaction and roll it back completely when something went wrong.

If you need to delete other item-related data, you should do it in the ```delete()``` method of the item class derived from the ```eiseItemTraceable```.

__Category__: Data Handling  



### <a name="eiseitemtraceable_fn_rlabymatrix"></a>public function __RLAByMatrix()__

This function calculates the roles that are allowed to perform actions on the item based on the matrix defined in the entity configuration. It iterates through each action and checks the matrix conditions against the item's attributes. If the conditions are met, it allows role members to run the action.

The matrix is defined in ```entMarix``` field of ```stbl_entity``` table. This is JSON string which contains conditions for some special attributes of the item, and the roles that are allowed to perform the action if the conditions are met.

These values are to be set for each action on eiseAdmin's action configuration form.

Matrix is loaded upon item initialization and then cached in user session.

__Category__: Events and Actions  



### <a name="eiseitemtraceable_fn_getlist"></a>public function __getList()__

This function returns a list of items based on the entity configuration and the current status ID. It uses the intra component to create a list object and adds columns to it based on the entity's attributes, actions, and status.

__Parameters__: 

* 	$arrAdditionalCols = Array()
* 	$arrExcludeCols = Array()

__Returns__: eiseList

__Uses__: eiseList  
__Category__: Data Display  



### <a name="eiseitemtraceable_fn_getnewitemid"></a>public function __getNewItemID($data = array())__

This is placeholder function for obtaining new item ID. It is used in the ```newItem()``` method to set the ID of the new item being created.

__Parameters__: 

* 	__$data__ (array) - data array that can be used to generate the new item ID.

__Returns__: string|int  - new item ID to be used as the primary key of the new item record in the database.

__Category__: Data Handling  



### <a name="eiseitemtraceable_fn_newitem"></a>public function __newItem($nd = array())__

This function creates a new item in the database based on the provided data array. It generates a new item ID, prepares the SQL fields for insertion, and executes the SQL query to insert the new item into the database. After the insertion, it appends action log entry for the "Create" action (actID=1).

__Parameters__: 

* 	$nd = array()

__Category__: Data Handling  



### <a name="eiseitemtraceable_fn_insert"></a>public function __insert($nd)__

This function inserts a new item into the database within a transaction. It starts a transaction, calls the `newItem()` method to create the item, updates the virtual roles associated with the item, and then commits the transaction. After that, it calls the parent `insert()` method to perform any additional actions defined in the parent class.

__Parameters__: 

* 	__$nd__ (array) - data array for the new item to be inserted.

__Category__: Data Handling  



### <a name="eiseitemtraceable_fn_doaction"></a>public function __doAction($oAct)__

This function executes the provided action object, which is an instance of `eiseAction`. It sets the current action to the provided action object, executes it, and then unsets the current action. After executing the main action, it also executes any extra actions that have been added to the `extraActions` array.

__Parameters__: 

* 	__$oAct__ (eiseAction) - The action object to be executed.

__Uses__: eiseAction  
__Category__: Events and Actions  



### <a name="eiseitemtraceable_fn_updaterolesvirtual"></a>public function __updateRolesVirtual()__

This function updates the roles associated with the item based on the virtual roles defined in the entity configuration. It deletes existing role-item-user associations for the item and then inserts new associations for each virtual role member.

This function is called after item update in order to re-assign virtual roles to users related to the item.

__Category__: Events and Actions  



### <a name="eiseitemtraceable_fn_getvirtualrolemembers"></a>public function __getVirtualRoleMembers($rolID)__

This function returns user list for virtual role members in a dictionary-like array of ```usrID=>null```.

This is also the placeholder for the virtual roles that are defined in the entity configuration for other entities derived from this class. So when you are about to override this function be sure to call the parent function first to get the default virtual role members.

Default roles are:
- __CREATOR - the user who created the item
- __EDITOR - the user who last edited the item

__Parameters__: 

* 	__$rolID__ (string) - the role ID for which to get the members.

__Returns__: array

__Category__: Events and Actions  



### <a name="eiseitemtraceable_fn_updateunfinishedactions"></a>public function __updateUnfinishedActions($nd = null)__

This function updates unfinished actions for the item based on the provided data array. It iterates through the ACL (Action Control List) of the item and updates each action that is not yet completed (i.e., has an action phase less than 2).

__Parameters__: 

* 	array|null $nd - The data array to update the actions with. If null, it uses the `$_POST` data.

__Category__: Events and Actions
Data Handling  



### <a name="eiseitemtraceable_fn_updateaction"></a>public function __updateAction($rwACL, $nd)__

This function updates a specific action data in the Action Log (ACL) of the item. It creates a new `eiseAction` object with the provided ACL data and the additional data from the `$nd` array, and then calls the `update()` method on that action object to perform the update.

__Parameters__: 

* 	__$rwACL__ (array) - The ACL data for the action to be updated.
* 	__$nd__ (array) - Additional data to be used for updating the action.

__Category__: Events and Actions
Data Handling  



### <a name="eiseitemtraceable_fn_getdata"></a>public function __getData($id = null)__

This function retrieves the data for the item based on its ID. It first calls the parent `getData()` method to obtain the basic data, then it removes the 'Master' entry from the `defaultDataToObtain` array if it exists. Finally, it calls the `getAllData()` method to retrieve all additional data and returns the item data.

Retrieved data is stored in the `$this->item` property, which is an associative array containing all relevant information about the item. See the `getAllData()` method for details on what data is retrieved.

__Parameters__: 

* 	int|null $id - The ID of the item to retrieve data for. If null, it uses the current item's ID.

__Returns__: array - The item data with all retrieved information.

__Category__: Data Handling  



### <a name="eiseitemtraceable_fn_getalldata"></a>public function __getAllData($toRetrieve = null)__

This function retrieves all data related to the item based on the provided parameters. It retrieves the necessary data based on the specified parameters, and returns the complete item data including attributes, status, action log, checklists, status log, comments, files and messages.

It can retrieve specific data based on the `$toRetrieve` parameter, or if it is null, it retrieves all default data defined in the `defaultDataToObtain` property. The function also handles archived items by decoding the JSON data stored in the ```{$this->entPrefix}Data``` field.

Data obtained is to be stored in the following fields of the `$this->item` associative array:
- item fields (e.g., `{$this->entPrefix}ID`, `{$this->entPrefix}Number`, etc.) will be stored as is
- text representations of reference data will be stored in fields with `_text` suffix (e.g., `{$this->entPrefix}StatusID_text`, `atrID_text` etc)
- 'ACL' will contain action log as associative array with action GUIDs as keys and action data as values
- 'STL' will contain status log as associative array with status log GUIDs as keys and status log data as values
- 'comments' will contain comments as associative array with comment GUIDs as keys and comment data as values
- 'files' will contain files as associative array with file GUIDs as keys and file data as values
- 'messages' will contain messages as associative array with message GUIDs as keys and message data as values

__Parameters__: 

* 	array|string|null $toRetrieve - The data to retrieve. If null, it retrieves all default data.

__Returns__: array - The complete item data.

__Category__: Data Handling  



### <a name="eiseitemtraceable_fn_refresh"></a>public function __refresh()__

An alias for the `getAllData()` method.

__Category__: Data Handling  



### <a name="eiseitemtraceable_fn_backup"></a>public function __backup($q)__

This function creates a backup of the current item data in JSON format. It retrieves all data using the `getAllData()` method, prepares the data for backup, and then either returns the JSON string or sends it as a downloadable file based on the `$q['asFile']` parameter.

__Parameters__: 

* 	$q

__Category__: Backup and Restore  



### <a name="eiseitemtraceable_fn_restore"></a>public function __restore($arg)__

Function ```restore()``` restores an item from a backup file or a JSON string. It starts a transaction, reads the backup data, creates or updates the item in the database, and restores related data such as attributes, status, and action log. It also handles batch processing if specified.

__Parameters__: 

* 	__$arg__ (mixed) - The backup data to restore. It can be a JSON string or an uploaded file.

__Category__: Backup and Restore  



### <a name="eiseitemtraceable_fn_beforeactionplan"></a>public function __beforeActionPlan()__

This function is called before action is "planned", i.e. record is added to the Action Log. 
It is usable to modify action data before it is occured in the database.

__Parameters__: 

* 	__$actID__ (string) - action ID
* 	__$oldStatusID__ (int) - status ID to be moved from
* 	__$newStatusID__ (int) - destintation status ID

__Category__: Events and Actions  



### <a name="eiseitemtraceable_fn_onactionplan"></a>public function __onActionPlan()__

This function is called after action is "planned", i.e. record is added to the Action Log. 
In case when something went wrong it should throw an exception.

__Parameters__: 

* 	__$actID__ (string) - action ID
* 	__$oldStatusID__ (int) - status ID to be moved from
* 	__$newStatusID__ (int) - destintation status ID

__Category__: Events and Actions  



### <a name="eiseitemtraceable_fn_onactionstart"></a>public function __onActionStart()__

This function is called after action is "started", i.e. Action Log record has changed its aclActionPhase=1.
In case when something went wrong it should throw an exception.

__Parameters__: 

* 	__$actID__ (string) - action ID
* 	__$oldStatusID__ (int) - status ID to be moved from
* 	__$newStatusID__ (int) - destintation status ID

__Category__: Events and Actions  



### <a name="eiseitemtraceable_fn_onactionfinish"></a>public function __onActionFinish()__

This function is called after action is "finished", i.e. Action Log record has changed its aclActionPhase=2.
In case when something went wrong it should throw an exception.

__Parameters__: 

* 	__$actID__ (string) - action ID
* 	__$oldStatusID__ (int) - status ID to be moved from
* 	__$newStatusID__ (int) - destintation status ID

__Category__: Events and Actions  



### <a name="eiseitemtraceable_fn_onactioncancel"></a>public function __onActionCancel()__

This function is called on event when action is "cancelled", i.e. Action Log record has changed its aclActionPhase=3.
In case when something went wrong it should throw an exception and cancellation will be prevented.

__Parameters__: 

* 	__$actID__ (string) - action ID
* 	__$oldStatusID__ (int) - status ID to be moved from
* 	__$newStatusID__ (int) - destintation status ID

__Category__: Events and Actions  



### <a name="eiseitemtraceable_fn_onactionundo"></a>public function __onActionUndo()__

This function is called when user would like to undo given action, before anything's restored.
In case when something went wrong it should throw an exception.

__Parameters__: 

* 	__$actID__ (string) - action ID
* 	__$oldStatusID__ (int) - status ID to be moved from
* 	__$newStatusID__ (int) - destintation status ID

__Category__: Events and Actions  



### <a name="eiseitemtraceable_fn_onstatusarrival"></a>public function __onStatusArrival($staID)__

This function is called when item arrives to given status.
In case when something went wrong it should throw an exception.

__Parameters__: 

* 	__$staID__ (string) - status ID

__Category__: Events and Actions  



### <a name="eiseitemtraceable_fn_onstatusdeparture"></a>public function __onStatusDeparture($staID)__

This function is called when item departs from given status.
In case when something went wrong it should throw an exception.

__Parameters__: 

* 	__$staID__ (string) - status ID

__Category__: Events and Actions  



### <a name="eiseitemtraceable_fn_processcheckmarks"></a>public function __processCheckmarks($arrAction)__

This function processes checkmarks for the item based on the provided action data. It checks if the item has any checkmarks defined, and if so, it counts how many checkmarks are required and how many are completed. If a checkmark is not completed but is set to be checked by the action, it updates the checkmark in the database.

__Parameters__: 

* 	__$arrAction__ (array) - The action data containing the new status ID and action ID.

__Category__: Events and Actions  



### <a name="eiseitemtraceable_fn_form"></a>public function __form($fields = '', $arrConfig=Array())__

This function generates the HTML form for the item, including hidden fields for the entity ID, old and new status IDs, action ID, ACL GUID, ToDo, and comments. It also includes the status field and the fields defined in the entity configuration.

The form can be customized with additional configuration options such as whether to add JavaScript, show messages, or include files.

__Parameters__: 

* 	__$fields__ (string) - The fields to include in the form. If empty, it will use the default fields.
* 	__$arrConfig__ (array) - Additional configuration options for the form.

__Returns__: string - The generated HTML form.

__Category__: Data Display  



### <a name="eiseitemtraceable_fn_form4list"></a>public function __form4list()__

This function generates the HTML form to be used for multiple item editing, including fields for setting data and action buttons. It uses the `getFields()` method to retrieve the fields and displays them in a fieldset. If there are radio buttons defined in the configuration, it also includes a fieldset for actions with a submit button.

__Returns__: string - The generated HTML form for listing multiple items.

__Category__: Data Display  



### <a name="eiseitemtraceable_fn_getstatusfield"></a>public function __getStatusField($conf=[])__

This function generates the HTML for the status field, which displays the current status of the item. Normally it is being shown in upper left corner of the form It can be configured to be clickable (with AJAX load of item action log) or non-clickable based on the provided configuration options.

__Parameters__: 

* 	__$conf__ (array) - Configuration options for the status field. It can include 'clickable' to determine if the status should be clickable.

__Returns__: string - The generated HTML for the status field.

__Category__: Data Display  



### <a name="eiseitemtraceable_fn_getactionlogskeleton"></a>public function __getActionLogSkeleton($conf=[])__

This function generates the HTML skeleton for the Action Log, which is a table that displays the action log entries for the item. It includes a template row for displaying action titles, finish by information, and action times. It also includes a row for displaying traced data and comments, as well as a spinner and a message for when no events are found.

__Parameters__: 

* 	__$conf__ (array) - Configuration options for the Action Log skeleton. It can include 'class' and 'id' to customize the HTML attributes.

__Returns__: string - The generated HTML skeleton for the Action Log.

__Category__: Data Display  



### <a name="eiseitemtraceable_fn_getchecklistskeleton"></a>public function __getChecklistSkeleton($conf=[])__

This function generates the HTML skeleton for the Checklist, which is a table that displays checklist items for the item. It includes a template row for displaying checkmarks, titles, and descriptions. It also includes a row for displaying a message when no events are found and a spinner for loading.

__Parameters__: 

* 	__$conf__ (array) - Configuration options for the Checklist skeleton. It can include 'class' and 'id' to customize the HTML attributes.

__Returns__: string - The generated HTML skeleton for the Checklist.

__Category__: Data Display  



### <a name="eiseitemtraceable_fn_getactionlog"></a>public function __getActionLog($q)__

This function retrieves the action log for the item based on the provided query parameters. It checks if the ACL data is already loaded, and if not, it retrieves all ACL data. It then processes each action log entry, filtering out certain actions based on the query parameters, and formats the data into an array of action log entries.

The function returns an array of action log entries, each containing information such as action ID, old and new status IDs, action titles, comments, and timestamps. If the action log entry has traced data, it also includes the traced HTML representation of the data. Array keys are just sequential numbers, starting from 0, and the array is ordered by the action log entry date in descending order.

It can return action log in reverse order if the query parameter `order` is set to `reverse`. It also filters out actions that are not relevant based on the `flagFull` query parameter, which determines whether to include all actions or skip 'Edit/Update' actions (actID=2).

Array to be returned is normally used as JSON data for asynchronous loading of the Action Log in the UI.

__Parameters__: 

* 	__$q__ (array) - Query parameters to filter the action log.

__Returns__: array - The formatted action log entries.

__Category__: Data Display  



### <a name="eiseitemtraceable_fn_getfields"></a>public function __getFields($aFields = null)__

This function retrieves the fields for the item based on the provided configuration and status ID. It checks if the fields should be shown based on the configuration and status, and returns an array of fields that can be used in a form or display.

__Parameters__: 

* 	array|null $aFields - An optional array of fields to retrieve. If null, it will use the default fields based on the configuration.

__Returns__: array - An array of fields to be displayed or used in a form.

__Category__: Data Display  



### <a name="eiseitemtraceable_fn_getattributefields"></a>public function __getAttributeFields()__

This function generates the HTML for the attribute fields of the item based on the provided fields and configuration. It checks if the item has the specified fields and generates the corresponding HTML input elements for each field, including options for comboboxes, selects, and AJAX dropdowns. It also handles attributes such as href, suffix, and write permissions.

__Parameters__: 

* 	__$fields__ (array) - An array of fields to generate HTML for.
* 	array|null $item - The item data to use for generating the fields. If null, it will use the current item.
* 	__$conf__ (array) - Configuration options for generating the fields, such as forceFlagWrite and suffix.

__Returns__: string - The generated HTML for the attribute fields.

__Category__: Data Display  



### <a name="eiseitemtraceable_fn_arractionbuttons"></a>public function __arrActionButtons()__

This function generates an array of action buttons based on the current status ID and user permissions. It retrieves the actions defined for the current status, checks if the user has permission to perform each action, and formats the actions into an array of buttons with titles, actions, IDs, datasets, and classes.

__Returns__: array - An array of action buttons with titles, actions, IDs, datasets, and classes.

__Category__: Data Display
Events and Actions  



### <a name="eiseitemtraceable_fn_showactionbuttons"></a>public function __showActionButtons()__

This function generates the HTML for the action buttons based on the actions defined in the configuration. It iterates through the array of action buttons, creating a button for each action with its title, ID, and dataset. The buttons are wrapped in a div with a class for styling and are returned as a string.

__Returns__: string - The generated HTML for the action buttons.

__Category__: Data Display
Events and Actions  



### <a name="eiseitemtraceable_fn_getactionbuttons"></a>public function __getActionButtons()__

Alias for the ```showActionButtons()``` method

__Parameters__: 

* 	$){ return $this->showActionButtons(

__Category__: Data Display  



### <a name="eiseitemtraceable_fn_showactionradios"></a>public function __showActionRadios()__

This function generates the HTML for the radio buttons based on the actions defined in the configuration. It iterates through the actions for the current status, checking user permissions and generating radio buttons for each action. The radio buttons include attributes for the old and new status IDs, and they are formatted with labels that include titles and status changes.

__Returns__: string - The generated HTML for the action radio buttons.

__Category__: Data Display  



### <a name="eiseitemtraceable_fn_showstatuslog"></a>public function __showStatusLog($conf = array())__

This function generates the HTML for the status log of the item, displaying the status entries with their titles, timestamps, and associated actions. It iterates through the status log entries, formatting each entry with its title, timestamps, and any associated actions. The function also handles the visibility of draft statuses based on the provided configuration.

__Parameters__: 

* 	__$conf__ (array) - Configuration options for displaying the status log, such as hiding draft statuses and enabling full edit mode.

__Returns__: string - The generated HTML for the status log.

__Category__: Data Display  



### <a name="eiseitemtraceable_fn_showunfinishedactions"></a>public function __showUnfinishedActions()__

This function generates the HTML for unfinished actions based on the ACL data of the item. It iterates through the ACL entries, checking if the action phase is less than 2 (indicating it is unfinished). For each unfinished action, it displays the action information and provides buttons to start, finish, or cancel the action if the user has write permissions.

__Returns__: string - The generated HTML for unfinished actions.

__Category__: Data Display  



### <a name="eiseitemtraceable_fn_showactioninfo"></a>public function __showActionInfo($aclGUID, $conf = array())__

This function generates the HTML for displaying action information based on the provided ACL GUID and configuration options. It retrieves the action details from the ACL and ACT arrays, formats the action title, timing, and attributes, and returns the generated HTML. It also handles full edit mode and additional callbacks if specified in the configuration.

__Parameters__: 

* 	__$aclGUID__ (string) - The GUID of the ACL entry to display.
* 	__$conf__ (array) - Configuration options for displaying the action information, such as forceFlagWrite and flagFullEdit.

__Returns__: string - The generated HTML for the action information.

__Category__: Data Display  



### <a name="eiseitemtraceable_fn_gettraceddata"></a>public function __getTracedData($rwACL)__

This function retrieves the traced data for an ACL item. It checks if the traced data is already stored in the ACL item, and if not, it queries the log table to retrieve the tracked fields based on the configuration. It returns an associative array of traced data, including any dropdown text for fields that are of type combobox, select, or ajax_dropdown.

__Parameters__: 

* 	__$rwACL__ (array) - The ACL item data containing the GUID and tracked fields.

__Returns__: array - An associative array of traced data for the ACL item, including field values and dropdown text if applicable.

__Category__: Data Display  



### <a name="eiseitemtraceable_fn_getactiondetails"></a>public function __getActionDetails($q)__

This function retrieves the details of an action based on the provided query parameters. It checks if either an action ID or an ACL GUID is provided, retrieves the corresponding action and ACL data, and returns them in a JSON response along with the attribute definitions.

__Parameters__: 

* 	__$q__ (array) - Query parameters containing either 'actID' or 'aclGUID'.

__Returns__: void - It throws a JSON response with action and ACL details.

__Category__: Data Display
Events and Actions  
__Throws__: Exception - If neither action ID nor ACL GUID is provided, or if the provided ACL GUID is invalid.  



### <a name="eiseitemtraceable_fn_getactiondata"></a>public function __getActionData($aclGUID, $rwACL=null)__

This function retrieves the action data based on the provided ACL GUID and an optional ACL record. It fetches the action log entry, merges it with the configuration data for statuses, and returns the action data including old and new status information.

__Parameters__: 

* 	__$aclGUID__ (string) - The GUID of the ACL entry to retrieve action data for.
* 	array|null $rwACL - An optional array containing the ACL record. If not provided, it will fetch the ACL data from the database.

__Returns__: array - An associative array containing the action data, including old and new status information.

__Category__: Data Display
Events and Actions  



### <a name="eiseitemtraceable_fn_getdropdowntext"></a>public function __getDropDownText($arrATR, $value)__

This function retrieves the text for a dropdown field based on the provided attribute array and value. It checks if the attribute type is a combobox and retrieves the options either from the programmer reserved data or from the data source. If the value exists in the options, it returns the corresponding text; otherwise, it returns a default text if specified.

Data source can be a PHP array defined as ```Array()```, a JSON string, or a database object like table or view. The fields where it could be stored are:
- `atrProgrammerReserved` - a PHP array defined as ```Array()``` (legacy)
- `atrDataSource` - a JSON string or a PHP array defined as ```Array()``` or name of database table or view

In case when it is table or view, the function will retrieve the text from the common views using the `getDataFromCommonViews` method. If you need to specify a prefix or extra parameters, you can use the `atrProgrammerReserved` field to define them, pipe-delimited, e.g. 'prx|123'

__Parameters__: 

* 	__$arrATR__ (array) - The attribute array containing the type, data source, and programmer reserved data.
* 	__$value__ (mixed) - The value for which to retrieve the dropdown text.

__Returns__: string|null - The text corresponding to the value in the dropdown options, or a default text if the value is not found.

__Category__: Data Display  



### <a name="eiseitemtraceable_fn_get_whos_next"></a>public function __get_whos_next($q)__

This function retrieves the "Who's Next" status information for the current status ID as a handle for Data Read event 'get_whos_next'. It calls the `getWhosNextStatus` method to get the next status information and formats it into an HTML structure. The function returns a div containing the "Who's Next" status information.

__Parameters__: 

* 	$q

__Returns__: string - The generated HTML for the "Who's Next" status information.

__Category__: Data Display
Events and Actions  



### <a name="eiseitemtraceable_fn_getnextbiggerstatus"></a>public function __getNextBiggerStatus($staID)__

This function retrieves the next bigger status ID based on the current status ID. It checks the actions defined for the current status and finds the next status that is greater than the current one, returning the maximum status ID if no larger status is found.

__Parameters__: 

* 	__$staID__ (int) - The ID of the current status for which to find the next bigger status.

__Returns__: int - The ID of the next bigger status, or the maximum status ID if no larger status is found.

__Category__: Data Display
Events and Actions  



### <a name="eiseitemtraceable_fn_getwhosnextstatus"></a>public function __getWhosNextStatus($staID, $counter)__

This function generates the HTML for the "Who's Next" status based on the provided status ID and counter. 

It goes status by status in upcoming order, displaying the status title, description, and available actions. It also lists the users and roles associated with each action, highlighting default actions and disabled roles.

__Parameters__: 

* 	__$staID__ (int) - The ID of the status for which to generate the "Who's Next" information.
* 	__$counter__ (int) - The counter for the tier level of the status. Tier = 1 means direct actors, tier = 2 means actors of the next escalation level, e.g management.

__Returns__: string - The generated HTML for the "Who's Next" status information, including status title, description, actions, and associated users and roles.

__Category__: Data Display
Events and Actions  



### <a name="eiseitemtraceable_fn_init"></a>private function __init()__

This function initializes item configuration and entity properties. Being called for the first time, it reads entity configuration from the database and fills in the item properties with it. It also reads roles, attributes, actions and status information for the entity.

After the configuration is read, it is stored in the session for later use. If the configuration is already stored in the session, it is read from there.

For debug purposes you can comment line ```if($_SESSION[$sessKey] && !$this->conf['flagDontCacheConfig']){``` and uncomment line ```if(false){```. This will force the configuration to be read from the database every time the item is created, instead of reading it from the session. This is useful for debugging purposes, but it will slow down the application significantly.

__Category__: Configuration  






## <a name="cls_eiseaction"></a>class __eiseAction__

This class handles actions on traceable items. Actions can be performed both by users and programmatically. Actions are defined in stbl_action table and linked to statuses in stbl_status table. Action can change status of the item, update some fields and trace item data defined by item configuration. 

Object created as class instance defines single action to be performed on the item. Action is executed by execute() method. Execution means that action is added to action log (stbl_action_log) and, if required, item data is updated in the master table. If action is not set to autocomplete, it should be started and finished separately.

Actions can be planned for forecasting purposes without execution. Planned actions are stored in stbl_action_log table with action phase set to 0. Planned actions can be started and finished later.

System can trace ETA/ETD/ATA/ATD timestamps for both actions, depending on action configuration options. These timestamps can be set programmatically or as actual timestamps when start or finish actions.

### <a name="eiseaction_prop_arraction"></a>public property __$arrAction__



__Variable__: array $conf Associative array defining action configuration as obtained from stbl_action table.
Might contain ```aclGUID``` key if action has been obtained from stbl_action_log table.  



### <a name="eiseaction_fn___construct"></a>public function ____construct()__

Constructor of eiseAction class

__Parameters__: 

* 	__$item__ (eiseItemTraceable) - Instance of eiseItemTraceable class the action is performed on
* 	__$arrAct__ (array) - Associative array defining action to be performed. Should contain at least 'actID' or 'aclGUID' keys
* 	__$options__ (array) - Associative array of options.

__Category__: Events and Actions  



### <a name="eiseaction_fn_execute"></a>public function __execute()__

This function "executes" the action. If action is set to autocomplete, it is added to action log and finished in one go. If not, it is just added to action log and should be started and finished later.

__Returns__: string Returns aclGUID of the action just executed

__Category__: Events and Actions  



### <a name="eiseaction_fn_update"></a>public function __update($nd = null)__

This function updates action log record with new data. It can be used to update traced fields, comments and timestamps.

__Parameters__: 

* 	__$nd__ (array) - Associative array of fields to update. Should contain keys like 'aclETA', 'aclETD', 'aclATA', 'aclATD' or any other fields defined as traceable in item configuration.

__Returns__: void

__Category__: Events and Actions  



### <a name="eiseaction_fn_add"></a>public function __add()__

Function adds new action to action log. ```aclActionPhase``` is set to 0 (planned). Action should be started and finished later unless it's set to autocomplete.
Function also updates ```$arrAction``` property of the class instance with data just inserted to action log.
Being executed it triggers ```beforeActionPlan``` and ```onActionPlan``` hooks of the item.

__Returns__: string Returns aclGUID of the action just added

__Category__: Events and Actions  



### <a name="eiseaction_fn_start"></a>public function __start()__

Function starts the action previously added to action log. ```aclActionPhase``` is set to 1 (started).
Being executed it triggers ```onActionStart``` hook of the item.

__Category__: Events and Actions  



### <a name="eiseaction_fn_validate"></a>public function __validate()__

This function validates if action can be performed. It does not check if user has permissions to run the action, this should be done separately.

It checks following:
- if action is create, update or delete, it checks if item is in correct status and if user has permissions to perform such action
- it checks if item is in correct status to run the action
- it checks mandatory fields defined for the action. 

In case of any problem, it throws an Exception with description of the problem.

__Category__: Events and Actions  



### <a name="eiseaction_fn_finish"></a>public function __finish()__

This function finishes the action previously started. ```aclActionPhase``` is set to 2 (completed). If action changes status, status log entry is added and master table is updated.
Being executed it triggers ```onActionFinish``` hook of the item.

__Returns__: void

__Category__: Events and Actions  



### <a name="eiseaction_fn_cancel"></a>public function __cancel()__

This function cancels the action previously added to action log. If action was in phase 0 (planned), it is deleted from action log. If it was started (phase 1), it is marked as cancelled (phase 3).

__Returns__: void

__Category__: Events and Actions  



### <a name="eiseaction_fn_checktimeline"></a>public function __checkTimeLine()__

This function checks if action timeline is correct, i.e. ATA is not less than previous ATA and not less than ATD.

In case of any problem, it throws an Exception with description of the problem.

__Category__: Events and Actions  



### <a name="eiseaction_fn_checkmandatoryfields"></a>public function __checkMandatoryFields()__

This function checks if all mandatory fields defined for the action are filled and if all fields defined as "to change" are actually changed.

In case of any problem, it throws an Exception with description of the problem.

__Category__: Events and Actions  



### <a name="eiseaction_fn_checkpermissions"></a>public function __checkPermissions()__

This function checks if user has permissions to run the action.

It checks following:
- if user is member of at least one role defined for the action
- if user is not member of any role defined as disabled for the action

In case of any problem, it throws an Exception with description of the problem.

__Category__: Events and Actions  






