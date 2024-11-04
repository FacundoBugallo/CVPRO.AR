from flask import Flask, request, make_response, redirect, render_template

app = Flask(__name__)

items = [
    "static/img/CV1.png",
    "static/img/CV2.png",
    "static/img/CV3.png",
    "static/img/CV4.png",
    "static/img/CV5.png",
    "static/img/CEOCV.png"
]
@app.errorhandler(404)
def not_found_endpoint(error):
    return render_template("not_found404.html", error=error)

@app.route("/ip")
def idex():
    user_ip_info = request.remote_addr
    response = make_response(redirect("/home")) 
    response.set_cookie("user_ip_info", user_ip_info)
    return response

@app.route("/home")
def home():
    user_ip = request.cookies.get("user_ip_info")
    context = {
        "user_ip": user_ip,
        "items": items
    }
    return render_template("home.html", **context)

@app.route('/copyright')
def copyright():
    return render_template('copyright.html')

@app.route('/legales')
def legales():
    return render_template('legales.html')


if __name__ == '__main__':  
    app.run(host='0.0.0.0', port=81, debug=True)
