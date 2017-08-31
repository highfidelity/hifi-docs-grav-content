---
title: Add an Entity Property
taxonomy:
  category: docs
---

## Checklist to Add Entity Property

Follow this checklist when adding a new entity property.

**EntityItemPropertiesDefaults**

In libraries/entities/src/EntityItemProperties.h, add a ENTITY_ITEM_XXX default value.

**EntityPropertyList enum**

In libraries/entities/src/EntityPropertyFlags.h, add a new PROP_XXX entry to the EntityPropertyList enum.

**EntityItemProperties class**

In libraries/entities/src/EntityItemProperties.h and .cpp add the following items:
* Add DEFINE_PROPERTY_REF or DEFINE_PROPERTY macro to EntityItemProperties header
* Add COPY_PROPERTY_TO_QSCRIPTVALUE macro to EntityItemProperties::copyToScriptValue
* Add COPY_PROPERTY_FROM_QSCRIPTVALUE macro to EntityItemProperties::copyFromScriptValue
* Add APPEND_ENTITY_PROPERTY macro to EntityItemProperties::encodeEntityEditPacket
* Add READ_ENTITY_PROPERTY_TO_PROPERTIES macro to EntityItemProperties::decodeEntityEditPacket
* Add CHECK_PROPERTY_CHANGE macro to EntityItemProperties::getChangedProperties
* Add _xxxChanged = true to EntityItemProperties::markAllChanged
* Add ADD_PROPERTY_TO_MAP macro to EntityItemProperties::entityPropertyFlagsFromScriptValue
* Add entry to EntityItemProperties::listChangedProperties()

**EntityItem or derived class**

If the property you are adding are only applies to a specific type of entity, add this to the EntityItem derived class.  Otherwise, add it directly to the EntityItem class.
* Add _xxx member variable
* Add getXXX() and setXXX() methods
* Add COPY_ENTITY_PROPERTY_TO_PROPERTIES macro to getProperties method
* Add SET_ENTITY_PROPERTY_FROM_PROPERTIES macro to setProperties method
* Add READ_ENTITY_PROPERTY macro to readEntitySubclassDataFromBuffer method
* Add PROP_XXX to requestedProperties in getEntityProperties method
* Add APPEND_ENTITY_PROPERTY macro to appendEntityData method (if in EntityItem) or appendSubclassData method (if in EntityItem derived class)

**PacketHeaders**

Add the following items to the libraries/networking/src/udt/PacketHeaders.h and cpp files.
* Add new value to the PacketVersion enum
* In the versionForPacketType function, return the new version number when packetType is EntityAdd, EntityEdit or EntityData.
