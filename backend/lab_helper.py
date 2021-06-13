import logging
import json
import lab_helper

def update_summary(data2update):
    status = "Success"
    update_count = 0
    actdevice_type = "miscelleneous"
    with open("lab_summary.json", "r") as summaryfile:
        summary = json.load(summaryfile)
        for object in summary:
            print(object)
            print(type(object))
            if object["team"] == data2update["ownedby"]:
                if data2update["device_type"] == "switch":
                    actdevice_type = "router"
                elif data2update["device_type"] != "ucs" or "router":
                    actdevice_type = "miscelleneous"
                else:
                    actdevice_type = data2update["device_type"]

                object[actdevice_type] += 1
                object["total"] += 1
                update_count += 1
            if update_count >= 1 and object["team"] == "ALL":
                object[actdevice_type] += 1
                object["total"] += 1

        if update_count is not 0:
            with open('lab_summary.json', 'w') as summaryfile:
                json.dump(summary, summaryfile)
        else:
                status = "Update Failed"
                print(status)

    return status
