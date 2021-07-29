# CLI Password Generator

this is a Node.js command line app to generate random passwords

## Usage

Install dependencies

```
npm install
```

To create a symlink to run "passwordgenerator" from anywhere

```
npm link

# Now you can run
passwordgenerator (options)

# To remove symlink
npm unlink
```

## Options

| Short | Long              | Description                     |
| ----- | ----------------- | ------------------------------- |
| -l    | --length <number> | length of password (default: 8) |
| -s    | --save            | save password to passwords.txt  |
| -nn   | --no-numbers      | remove numbers                  |
| -ns   | --no-symbols      | remove symbols                  |
| -nc   | --no-chars        | remove chars                    |
| -u    | --upper-chars     | password contain upper chars    |
| -h    | --help            | display help for command        |
| -V    | --version         | Show the version                |
