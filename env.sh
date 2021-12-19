#!/bin/sh

# gcloud config set project [project-id] && \
# gcloud secrets versions access latest --secret [secret-name] >.env.local && \
ls -a .env* | xargs -I {} ln -sf ../../{} src/web/{}
# ls -a .env* | xargs -I {} ln -sf ../../../{} src/firebase/functions/{} && \