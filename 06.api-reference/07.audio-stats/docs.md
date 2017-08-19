---
title: 'Audio Stats'
taxonomy:
    category:
        - docs
---

| Properties                                      | Type   | Description |
|-------------------------------------------------|--------|-------------|
| AudioStats.clientStream.objectName              | string |             |
| AudioStats.injectorStreams.objectName           | string |             |
| AudioStats.mixerStream.objectName               | string |             |
| AudioStats.objectName                           | string |             |
| AudioStats.clientStream.dropCount               | number |             |
| AudioStats.clientStream.framesAvailable         | number |             |
| AudioStats.clientStream.framesAvailableAvg      | number |             |
| AudioStats.clientStream.framesDesired           | number |             |
| AudioStats.clientStream.lastStarveDurationCount | number |             |
| AudioStats.clientStream.lossCount               | number |             |
| AudioStats.clientStream.lossCountWindow         | number |             |
| AudioStats.clientStream.lossRate                | number |             |
| AudioStats.clientStream.lossRateWindow          | number |             |
| AudioStats.clientStream.overflowCount           | number |             |
| AudioStats.clientStream.starveCount             | number |             |
| AudioStats.clientStream.timegapMsAvg            | number |             |
| AudioStats.clientStream.timegapMsAvgWindow      | number |             |
| AudioStats.clientStream.timegapMsMax            | number |             |
| AudioStats.clientStream.timegapMsMaxWindow      | number |             |
| AudioStats.clientStream.unplayedMsMax           | number |             |
| AudioStats.inputReadMsMax                       | number |             |
| AudioStats.inputUnplayedMsMax                   | number |             |
| AudioStats.mixerStream.dropCount                | number |             |
| AudioStats.mixerStream.framesAvailable          | number |             |
| AudioStats.mixerStream.framesAvailableAvg       | number |             |
| AudioStats.mixerStream.framesDesired            | number |             |
| AudioStats.mixerStream.lastStarveDurationCount  | number |             |
| AudioStats.mixerStream.lossCount                | number |             |
| AudioStats.mixerStream.lossCountWindow          | number |             |
| AudioStats.mixerStream.lossRate                 | number |             |
| AudioStats.mixerStream.lossRateWindow           | number |             |
| AudioStats.mixerStream.overflowCount            | number |             |
| AudioStats.mixerStream.starveCount              | number |             |
| AudioStats.mixerStream.timegapMsAvg             | number |             |
| AudioStats.mixerStream.timegapMsAvgWindow       | number |             |
| AudioStats.mixerStream.timegapMsMax             | number |             |
| AudioStats.mixerStream.timegapMsMaxWindow       | number |             |
| AudioStats.mixerStream.unplayedMsMax            | number |             |
| AudioStats.outputUnplayedMsMax                  | number |             |
| AudioStats.pingMs                               | number |             |
| AudioStats.sentTimegapMsAvg                     | number |             |
| AudioStats.sentTimegapMsAvgWindow               | number |             |
| AudioStats.sentTimegapMsMax                     | number |             |
| AudioStats.sentTimegapMsMaxWindow               | number |             |



| Methods                               |
| ------------------------------------- |
| AudioStats.clientStream.deleteLater() |
| AudioStats.mixerStream.deleteLater()  |
|AudioStats.injectorStreams.deleteLater()|



| Events                                   |
| ---------------------------------------- |
| AudioStats.clientStream.dropCountChanged(int) |
| AudioStats.clientStream.framesAvailableAvgChanged(int) |
| AudioStats.clientStream.framesAvailableChanged(int) |
| AudioStats.clientStream.framesDesiredChanged(int) |
| AudioStats.clientStream.lastStarveDurationCountChanged(int) |
| AudioStats.clientStream.lossCountChanged(float) |
| AudioStats.clientStream.lossCountWindowChanged(float) |
| AudioStats.clientStream.lossRateChanged(float) |
| AudioStats.clientStream.lossRateWindowChanged(float) |
| AudioStats.clientStream.objectNameChanged(QString) |
| AudioStats.clientStream.overflowCountChanged(int) |
| AudioStats.clientStream.starveCountChanged(int) |
| AudioStats.clientStream.timegapMsAvgChanged(qulonglong) |
| AudioStats.clientStream.timegapMsAvgWindowChanged(qulonglong) |
| AudioStats.clientStream.timegapMsMaxChanged(qulonglong) |
| AudioStats.clientStream.timegapMsMaxWindowChanged(qulonglong) |
| AudioStats.clientStream.unplayedMsMaxChanged(float) |
|AudioStats.injectorStreams.objectNameChanged(QString)|
| AudioStats.injectorStreamsChanged()      |
| AudioStats.inputReadMsMaxChanged(float)  |
| AudioStats.inputUnplayedMsMaxChanged(float) |
| AudioStats.mixerStream.dropCountChanged(int) |
| AudioStats.mixerStream.framesAvailableAvgChanged(int) |
| AudioStats.mixerStream.framesAvailableChanged(int) |
| AudioStats.mixerStream.framesDesiredChanged(int) |
| AudioStats.mixerStream.lastStarveDurationCountChanged(int) |
| AudioStats.mixerStream.lossCountChanged(float) |
| AudioStats.mixerStream.lossRateChanged(float) |
| AudioStats.mixerStream.lossRateWindowChanged(float) |
| AudioStats.mixerStream.objectNameChanged(QString) |
| AudioStats.mixerStream.overflowCountChanged(int) |
| AudioStats.mixerStream.starveCountChanged(int) |
| AudioStats.mixerStream.timegapMsAvgChanged(qulonglong) |
| AudioStats.mixerStream.timegapMsAvgWindowChanged(qulonglong) |
| AudioStats.mixerStream.timegapMsMaxChanged(qulonglong) |
| AudioStats.mixerStream.timegapMsMaxWindowChanged(qulonglong) |
| AudioStats.mixerStream.unplayedMsMaxChanged(float) |
| AudioStats.mixerStreamChanged()          |
| AudioStats.objectNameChanged(QString)    |
| AudioStats.outputUnplayedMsMaxChanged(float) |
| AudioStats.pingMsChanged(float)          |
| AudioStats.sentTimegapMsAvgChanged(qulonglong) |
| AudioStats.sentTimegapMsAvgWindowChanged(qulonglong) |
| AudioStats.sentTimegapMsMaxChanged(qulonglong) |
| AudioStats.sentTimegapMsMaxWindowChanged(qulonglong) |
