from flask import Flask, render_template, request
from flask_cors import CORS
from flask import jsonify
import logging
import json
import lab_helper


app = Flask(__name__)
CORS(app)

logging.basicConfig(level=logging.DEBUG)

@app.route("/")
def home():
    with open('lab_structure.json', 'r') as labfile:
        data = json.load(labfile)
    return jsonify(data)

''' function to reserve a lab resource '''
@app.route("/reserve")
def reserve(input):
    with open('lab_structure.json', 'w') as labfile:
        data = json.load(labfile)
        for device in data:
            if device['id'] == input['device_id']:
                device['reservation_status'] = True
                device['reserved_by'] = input['user_id']
            else: raise Exception("Requested device doesn't exist")
        json.dump(data, labfile)
    #return render_template("reserve.html")
    return jsonify(data)

''' function to release a lab resource '''
@app.route("/release")
def release(input):
    with open('lab_structure.json', 'w') as labfile:
        data = json.load(labfile)
        for device in data:
            if device['id'] == input['device_id']:
                device['reservation_status'] = False
                device['reserved_by'] = ' '
            else: raise Exception("Requested device doesn't exist")
        json.dump(data, labfile)
    #return render_template("release.html")
    return jsonify(data)

''' shows current reservation status of device'''
@app.route("/viewlab")
def viewlab():
    with open('lab_structure.json', 'r') as labfile:
        data = json.load(labfile)
    #return render_template("viewlab.html")
    return jsonify(data)

''' shows current reservation status of device'''
@app.route("/viewdevice", methods=['POST'])
def devicedetails():
    input = request.get_json('device_id')
    #import pdb; pdb.set_trace()
    device_details = dict()
    with open('lab_structure.json', 'r') as labfile:
        data = json.load(labfile)
        for device in data:
            if input == device['device_id']:
                #break
                device_details = device

        if device_details['device_id'] == input:
            status = True
        else: raise Exception("Requested device doesn't exist")

        return jsonify(device_details)


''' function to notify users to act upon specific request'''
@app.route("/requestaction")
def requestaction(input):
    from_user = input['user_id']
    msg = "Pls" + input[action] + "device" + input['device_id']
    with open('lab_structure.json', 'w') as labfile:
        data = json.load(labfile)
        for device in data:
            if device['id'] == input['device_id']:
                to_user = device['reserved_by']
        trigger_msg(from_user, to_user, msg)

    #return render_template("requestaction.html")
    return jsonify(data)

''' function to add a new device to the lab manager'''
@app.route("/adddevice", methods=['POST'])
def add_device():
    input = request.get_json()
    device_exist = False

    app.logger.info('input content is', input)
    with open('lab_structure.json', 'r') as labfile:
        data = json.load(labfile)
    '''for item in data:
        if  item["device_id"] == input["device_id"]:
            device_exist = True

    if not device_exist:
        data.append(input)
        #labfile.truncate(0)
        with open('lab_structure.json', 'w') as labfile:
            json.dump(data, labfile)
        lab_helper.update_summary(input)'''

    if input["device_id"] not in data:
        data.append(input)
        #labfile.truncate(0)
        with open('lab_structure.json', 'w') as labfile:
            json.dump(data, labfile)
        lab_helper.update_summary(input)
    else:
        raise Exception
    # Update summary.json file

    return jsonify(data)


''' function to update a device in the lab manager'''
@app.route("/updatedevice")
def update_device(input):
    with open('lab_structure.json', 'w') as labfile:
        data = json.load(labfile)
        for device in data:
            if device['id'] == input['device_id']:
                device['device_name'] = input['device_name']
                device['device_type'] = input['device_type']
                device['device_state'] = input['device_state']
                device['device_mgmt_int'] = input['device_mgmt_int']
                device['reservation_status'] = input['reservation_status']
                device['reserved_by'] = input['reserved_by']
            else: raise Exception("Requested device doesn't exist")
        json.dump(data, labfile)
    #return render_template("updatedevice.html")
    return jsonify(data)

''' function to delete a device in the lab manager'''
@app.route("/deletedevice")
def delete_device(input):
    with open('lab_structure.json', 'w') as labfile:
        data = json.load(labfile)
        for device in data:
            if device['id'] == input['device_id']:
                del device
            else: raise Exception("Requested device doesn't exist")
            json.dump(data, labfile)
        #return render_template("deletedevice.html")
        return jsonify(data)


''' function to return device usage stats'''
@app.route("/stats")
def get_usage_stats():
    with open('lab_summary.json', 'r') as summaryfile:
        summary_data = json.load(summaryfile)
    #return render_template("reserve.html")
    return jsonify(summary_data)



@app.route("/singup")
def signup():
    return render_template("signup.html")

@app.route("/singin")
def signin():
    return render_template("signin.html")

@app.route("/singout")
def signout():
    return render_template("signout.html")





if __name__ == "__main__":
    app.run(debug=True)
