from flask import Flask, request, make_response, redirect, render_template

app = Flask(__name__)

items = [
    "static/img/CVResume5.png",
    "static/img/CVResume4.png",
    "static/img/CVResume.png",
    "static/img/CVResume3.png",
    "static/img/CVResume2.png",
    "static/img/CVResume1.png"
]
@app.errorhandler(404)
def not_found_endpoint(error):
    return render_template("not_found404.html", error=error)

@app.route("/home")
def home():
    context = {
        "items": items
    }
    return render_template("home.html", **context)

@app.route('/copyright')
def copyright():
    return render_template('copyright.html')

@app.route('/legales')
def legales():
    return render_template('legales.html')


@app.route('/vision')
def vision():
    return render_template('Objetivos.html')


if __name__ == '__main__':  
    app.run(host='0.0.0.0', port=81)
