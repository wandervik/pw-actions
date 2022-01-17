# const version_cloudfront='1.0.0';
import sys

old_version = sys.argv[1]
version = sys.argv[2]

with open('lambda-var.js', 'r') as file:
    data=file.read()

data = data.replace(old_version, version)

with open('lambda-var.js', 'w') as file:
    file.write(data)

    # lol kek
