from flask import Flask, render_template, request, redirect

app = Flask(__name__)


@app.route("/", methods=["GET", "POST"])
def index():
    if request.method == "POST":
        text = request.form["Text"]
        print(text)
        return redirect(url_for(wbw, text=text))
    return render_template("index.html")



@app.route("/wordbyword/", methods=["GET", "POST"])
def wbw():
    return "Hi"







if __name__ == "__main__":
    app.run(debug=True)