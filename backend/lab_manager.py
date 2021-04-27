from flask import Flask, render_template
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return render_template("home.html")

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
    return render_template("reserve.html")

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
    return render_template("release.html")

''' shows current reservation status of device'''
@app.route("/viewlab")
def viewlab():
    with open('lab_structure.json', 'w') as labfile:
        data = json.load(labfile)

    return data
    #return render_template("viewlab.html")

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

    return render_template("requestaction.html")

''' function to add a new device to the lab manager'''
@app.route("/adddevice")
def add_device(input):
    new_device['device_name'] = input['device_name']
    new_device['device_id'] = input['device_id']
    new_device['device_type'] = input['device_type']
    new_device['device_state'] = input['device_state']
    new_device['device_mgmt_int'] = input['device_mgmt_int']
    new_device['reservation_status'] = input['reservation_status']
    new_device['reserved_by'] = input['reserved_by']

    with open('lab_structure.json', 'w') as labfile:
      data = json.load(labfile)
      data.append(new_device)
      json.dump(data, labfile)

    return render_template("adddevice.html")

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
    return render_template("updatedevice.html")

'' function to update a device in the lab manager'''
@app.route("/updatedevice")
def update_device(input):
    with open('lab_structure.json', 'w') as labfile:
        data = json.load(labfile)
        for device in data:
            if device['id'] == input['device_id']:
                del device
            else: raise Exception("Requested device doesn't exist")
            json.dump(data, labfile)
        return render_template("deletedevice.html")




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
