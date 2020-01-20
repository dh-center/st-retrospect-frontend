#!/bin/sh

# Decrypt the file
mkdir $HOME/secrets

pwd
echo pwd

# --batch to prevent interactive command --yes to assume "yes" for questions
gpg --quiet --batch --yes --decrypt --passphrase="$GPG_PASSPHRASE" \
--output $HOME/secrets/.env ../.env.gpg
