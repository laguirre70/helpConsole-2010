﻿USETEXTLINKS = 1
STARTALLOPEN = 0
HIGHLIGHT = 1
HIGHLIGHT_BG = '#808080'
ICONPATH = 'skinimages/'
GLOBALTARGET = 'R'
foldersTree = gFld('', '')
foldersTree.iconSrc = ICONPATH + 'ftv2blank.gif'
foldersTree.treeID = 'Tree1'

xwelcome = insFld(foldersTree, gFld('Welcome', 'welcome.htm'))
insDoc(xwelcome, gLnk('R', 'Ask', 'ask.htm'))
xInstallation = insFld(foldersTree, gFld('Installation', 'Installation.htm'))
insDoc(xInstallation, gLnk('R', 'System&nbsp;Requirements', 'System_Requirements.htm'))
insDoc(xInstallation, gLnk('R', 'Internet&nbsp;Explorer&nbsp;Configuration', 'internet_explorer_configuration.htm'))
xintroduction = insFld(foldersTree, gFld('Introduction', 'introduction.htm'))
insDoc(xintroduction, gLnk('R', 'Screen&nbsp;Overview', 'screen_overview.htm'))
insDoc(xintroduction, gLnk('R', 'Logon&nbsp;Page', 'logon_page.htm'))
xlogbook_usage = insFld(foldersTree, gFld('Logbook&nbsp;Usage', 'logbook_usage.htm'))
insDoc(xlogbook_usage, gLnk('R', 'Logbook&nbsp;Screen', 'logbook_screen.htm'))
insDoc(xlogbook_usage, gLnk('R', 'Searching&nbsp;Logbook&nbsp;Entries', 'searching_logbook_entries.htm'))
insDoc(xlogbook_usage, gLnk('R', 'Search&nbsp;by&nbsp;Name', 'search_by_name.htm'))
insDoc(xlogbook_usage, gLnk('R', 'Advanced&nbsp;Searches', 'advanced_searches.htm'))
insDoc(xlogbook_usage, gLnk('R', 'Accessing&nbsp;Logbook&nbsp;Information', 'accessing_logbook_information.htm'))
insDoc(xlogbook_usage, gLnk('R', 'Creating&nbsp;a&nbsp;New&nbsp;Logbook&nbsp;entry', 'creating_a_new_logbook_entry.htm'))
insDoc(xlogbook_usage, gLnk('R', 'Save&nbsp;and&nbsp;Repeat', 'save_and_repeat.htm'))
insDoc(xlogbook_usage, gLnk('R', 'Cloning&nbsp;a&nbsp;Logbook&nbsp;Entry&nbsp;and&nbsp;Recurrences', 'cloning_a_logbook_entry.htm'))
insDoc(xlogbook_usage, gLnk('R', 'Printing&nbsp;Confirmations', 'printing_confirmations.htm'))
insDoc(xlogbook_usage, gLnk('R', 'Printing&nbsp;Itineraries', 'printing_itineraries.htm'))
xcontact_usage = insFld(foldersTree, gFld('Contact&nbsp;Usage', 'contact_usage.htm'))
insDoc(xcontact_usage, gLnk('R', 'Contact&nbsp;Sceen', 'contact_sceen.htm'))
insDoc(xcontact_usage, gLnk('R', 'Searching&nbsp;Contacts', 'searching_contacts.htm'))
insDoc(xcontact_usage, gLnk('R', 'Advanced&nbsp;Searches', 'advanced_searches1.htm'))
insDoc(xcontact_usage, gLnk('R', 'Adding&nbsp;New&nbsp;Contact&nbsp;Information', 'adding_new_contact_information.htm'))
insDoc(xcontact_usage, gLnk('R', 'Contact&nbsp;Information', 'contact_information.htm'))
xreminders1 = insFld(foldersTree, gFld('Reminders', 'reminders1.htm'))
insDoc(xreminders1, gLnk('R', 'Logbook&nbsp;Reminders', 'reminders.htm'))
insDoc(xreminders1, gLnk('R', 'Contact&nbsp;Reminders', 'contact_reminders.htm'))
insDoc(xreminders1, gLnk('R', 'Profile&nbsp;Reminders', 'profile_reminders.htm'))
xmessages = insFld(foldersTree, gFld('Messages', 'messages.htm'))
insDoc(xmessages, gLnk('R', 'Messages&nbsp;Overview', 'messages1.htm'))
xprofiles = insFld(foldersTree, gFld('Profiles', 'profiles.htm'))
insDoc(xprofiles, gLnk('R', 'Search&nbsp;A&nbsp;Profile', 'search_a_profile.htm'))
insDoc(xprofiles, gLnk('R', 'Add&nbsp;A&nbsp;Profile', 'add_a_profile.htm'))
insDoc(xprofiles, gLnk('R', 'Linking&nbsp;a&nbsp;Profile&nbsp;to&nbsp;Logbook', 'linking_a_profile_to_logbook.htm'))
xbasic_administration = insFld(foldersTree, gFld('Basic&nbsp;Administration', 'basic_administration.htm'))
insDoc(xbasic_administration, gLnk('R', 'Contact&nbsp;Keywords', 'contact_keywords.htm'))
insDoc(xbasic_administration, gLnk('R', 'Creating&nbsp;and&nbsp;Editing&nbsp;Logbook&nbsp;Categories', 'creating_and_editing_logbook_categories.htm'))
insDoc(foldersTree, gLnk('R', 'PCI&nbsp;Best&nbsp;Practices', 'docs/CA Web Best Practices.pdf'))
xvideos1 = insFld(foldersTree, gFld('Videos', 'videos1.htm'))
insDoc(xvideos1, gLnk('R', 'Adding&nbsp;a&nbsp;Logbook&nbsp;Entry', 'adding_a_logbook_entry.htm'))
insDoc(xvideos1, gLnk('R', 'Create&nbsp;an&nbsp;Itinerary', 'create_an_itinerary.htm'))
insDoc(xvideos1, gLnk('R', 'Contact&nbsp;Links', 'contact_links.htm'))
insDoc(xvideos1, gLnk('R', 'OpenTable&nbsp;Demo', 'opentable_demo.htm'))
insDoc(xvideos1, gLnk('R', 'Email&nbsp;from&nbsp;PDF', 'email_from_pdf.htm'))
insDoc(xvideos1, gLnk('R', 'Recurring&nbsp;Logbook&nbsp;Entries', 'recurring_logbook_entries.htm'))
insDoc(foldersTree, gLnk('R', 'Keyboard&nbsp;Shortcuts', 'keyboard_shortcuts.htm'))
xFAQ = insFld(foldersTree, gFld('FAQ', 'FAQ.htm'))
insDoc(xFAQ, gLnk('R', 'General&nbsp;FAQ', 'General_FAQ.htm'))
insDoc(xFAQ, gLnk('R', 'Installation&nbsp;FAQ', 'Installation_FAQ.htm'))
