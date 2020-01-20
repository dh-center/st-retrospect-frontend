#!/bin/sh

# Decrypt the file
mkdir $HOME/secrets

pwd
ls

# --batch to prevent interactive command --yes to assume "yes" for questions
gpg --quiet --batch --yes --decrypt --passphrase="$GPG_PASSPHRASE" \
--output $HOME/secrets/.env .github/.env.gpg
