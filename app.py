from flask import Flask, render_template, request, redirect

app = Flask(__name__)


@app.route("/")
def index():
    return render_template("index.html")



@app.route("/wordbyword/")
def wbw():
    return render_template("wordbyword.html")







if __name__ == "__main__":
    app.run(debug=True)