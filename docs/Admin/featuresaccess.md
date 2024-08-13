---
title: "Features & Access"
sidebar_position: 7
---
# Features & Access

Use Features & Access to setup what users can do and see whilst using RiskBase.

Features & Access settings can be applied directly to [Users](a) or to [User Groups](a). Users inherit settings from user groups they’re assigned to; this provides an efficient way to manage Features & Access for groups of users.

Turn features ON and OFF to set what users can do whilst using RiskBase. For example, you may want a user to see assessments but not create new ones.

**Change Feature Settings**

* From your organisation’s Details page, select the Features & Access tab.
* Choose a user (or user group) from the drop down and select the Features tab.
* All features will be displayed. The user’s settings and any settings inherited from user groups are displayed.

**Turn Features *ON* or *OFF***

* Mouse over the feature you’d like to turn *ON* or *OFF*.
* Click *ON* or *OFF*.
* When you’ve finished, click *Save*.

**Remove an *ON* or *OFF* Setting**

1. Mouse over the feature you’d like to remove the setting for.
    * If the feature is currently set to *ON*, click *ON* again.
    * If the feature is currently set to *OFF*, click *OFF* again.
1. After clicking the button you’ll notice it becomes depressed; the setting has been removed.
1. When you’ve finished, click *Save*.

**Understanding Inheritance**

As described above, users inherit settings from user groups they’re assigned to.

Features inherited from a user group are display after the features name.

Limit what [Objects](a) users can see in your organisation. This setting can either be set for a user or set for a user group and inherited by its users.

**Change Access Settings**

1. From your organisation’s Details page, select the Features & Access tab.
1. Choose a user (or user group) from the drop down and select the Access tab.
1. Your organisation’s objects are displayed.

The user’s settings and any settings inherited from user groups are displayed.

* Objects the user can see are shown in green.
* Objects the user cannot see are shown in red.

**Example 1**

Hide all objects except London and everything within London:

1. Mouse over the organisation, in this example it’s called Your Organisation. Click *HIDE* to hide everything in the organisation.
1. Mouse over the object you want the user to see, in this example it’s London. Click *SHOW* to show London and everything within London.
1. Click *Save*.

The user can now only see London and everything within London. They’ll be able to see new objects added to London, but not objects added elsewhere.

**Example 2**

Hide all objects except Buckingham Palace:

1. Mouse over the organisation, in this example it’s called Your Organisation. Click *HIDE* to hide everything in the organisation.
1. Mouse over the object you want the user to see, in this example it’s Buckingham Palace. Click *SHOW* to show just Buckingham Palace.
1. Click *Save*.

The user can now only see Buckingham Palace. They cannot see anything else and will not see any new objects added.

**Example 3**

Show all objects except Manchester and everything within Manchester:

1. Mouse over the object you want to hide from the user, in this example it’s Manchester. Click *HIDE* to hide Manchester.
1. Click *Save*.

The user can now see everything except Manchester and everything within Manchester. They’ll be able to see new objects to anything other than Manchester.



**A user can be assigned to multiple user groups.**

The order in which the user groups are setup is the order their settings are applied to users.

For example, the outcome of the following three groups after they’ve been applied, is:

| | | | | | |
| --- | --- | --- | --- | --- | --- |
| **Order** | **User Group Name** | **Feature 1** | **Feature 2** | **Feature 3** | **Feature 4** |
| 1 | User Group A | ON | OFF | - | - |
| 2 | User Group B | OFF | ON | - | - |
| 3 | User Group C | - | - | OFF | - |
| | **Outcome** | OFF | ON | OFF |  OFF |

> A user’s Features & Access settings are always applied last, overriding group settings.
