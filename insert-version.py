# const version_cloudfront='1.0.0';
import sys

version = sys.argv[1]

with open('lambda-var.js', 'r') as file:
    data=file.read()

data = data.replace('1.0.0', version)

with open('lambda-var.js', 'w') as file:
    file.write(data)

    # lol kek
