USEFRAMES = 0
PRESERVESTATE = 1
USETEXTLINKS = 1
STARTALLOPEN = 0
HIGHLIGHT = 1
HIGHLIGHT_BG = '#808080'
ICONPATH = 'images/'


foldersTree = gFld('', '')
foldersTree.iconSrc = ICONPATH + 'ftv2blank.gif'
foldersTree.treeID = 'Tree1'

    aux2 = insFld(foldersTree, gFld("Getting Started", "http://www.extremeease.com"))

      insDoc(aux2, gLnk('R', 'How to Order', 'http://www.extremeease.com'))
      insDoc(aux2, gLnk("R", "How to Get Support", "http://www.extremeease.com"))
      insDoc(aux2, gLnk("R", "online Information", "http://www.extremeease.com"))
      insDoc(aux2, gLnk("S", "JavaScript link", "javascript:alert(\\\'This JavaScript link simply calls the built-in alert function,\\\\nbut you can define your own function.\\\')"))

