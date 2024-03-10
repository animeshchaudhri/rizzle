from taipy.gui import Gui

homepage = """
<|layout|columns= 2.5 1|
<|
####Hi, Welcome to Rizzle.
<|Generated video|expandable|
<iframe src="sample.mp4" frameborder="0" allowfullscreen class="responsive-video"></iframe>
|>

<textarea class="cont">
Welcome to TinyMCE!
</textarea>

|>
<|nav|
<|navbar|>
<|Generate|button|>
|>
|>
"""

profilepage = """
<|layout|columns= 2.5 1|
<|
####Hi, Welcome to Rizzle.
<|About you|expandable|
<|{pic}|image|height=50vh|width=100%|>
|>
|>
<|nav|
<|navbar|>
|>
|>
"""

historypage = """
<|layout|columns= 2.5 1|
<|
####Hi, Welcome to Rizzle.
<|History|expandable|
<|{pic}|image|height=50vh|width=100%|>
|>
|>
<|nav|
<|navbar|>
|>
|>
"""


pages = {
    "Home": homepage,
    "Profile": profilepage,
    "History": historypage
}


pic = "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"

Gui(pages=pages).run(use_reloader=True,port=5001)

