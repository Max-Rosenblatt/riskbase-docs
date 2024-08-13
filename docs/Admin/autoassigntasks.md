---
title: "Auto-Assign Tasks"
sidebar_position: 9
---
# Auto Assign Tasks

This guide explains how RiskBase can automatically assign teams and users to tasks by combining two powerful task features.



RiskBase can automatically assign a team (or multiple teams) to a task based on its category.

After selecting a category, RiskBase displays which teams will be automatically assigned. Manually assigning somebody will stop the teams from being automatically assigned.

*Choose Which Teams are Responsible for a Category*

1. Go to your organisation’s Preferences: right click your organisation in the [Explorer](a).
1. Select *Details*, open the Preferences tab.
1. From the Task Categories section, double click on a category or a category group.
1. Choose the teams you’d like to be responsible and click Save.

> Changing the responsible teams will re-assign all existing tasks.

If no responsible teams are selected for a category, teams will be inherited from the category group.

RiskBase can automatically assign a user (or multiple users) to a task based on the teams assigned to it.

After assigning a team, RiskBase displays which users will be automatically assigned.

**Choose Which People are Responsible for a Team**

1. Right click an object (organisation, property group or property) in the explorer and select Details.
1. Click Edit Section and choose the “Responsible People”.
1. Click *Save Section*.

> Changing the responsible people will re-assign all existing tasks.

Different users can be responsible for a team depending on the property. In the following example, Brandon and Ben are members of the Maintenance team.

Brandon is responsible for all South of England maintenance tasks, with the exception of London, which Ben is responsible for.

When the Maintenance team is assigned to a task, either Brandon or Ben will be automatically assigned too.

> **Acme Company Ltd** Organisation
>
> Maintenance: No Member Specified as Responsible
>
> -------- **South of England** Property Group
>
> -------- Maintenance: Brandon
>
> ---------------- **South West** Property Group
>
> ---------------- Maintenance: Brandon Inherited
>
> ------------------------ **London** Property Group
>
> ------------------------ Maintenance: Ben
>
> -------------------------------- **Twickenham** Property Group
>
> -------------------------------- Maintenance: Ben Inherited
