import json
file = './lang/data.json'
with open(file) as json_file:
    data = json.load(json_file)

key = input("Enter the variable key : ")
fr = input("Entrez la version fr : ")
mg = input("Entrez la version mg : ")
en = input("Entrez la version en : ")

obj = dict()
obj['mg'] = mg
obj['en'] = en
obj['fr'] = fr
data[key]=obj

with open(file, 'w') as outfile:
    json.dump(data, outfile, indent=4)