.PHONY: patch minor

patch:
	npx zx https://raw.githubusercontent.com/jungai/all-of-my-zx/main/dist/src/push_tag.js -v patch

minor:
	npx zx https://raw.githubusercontent.com/jungai/all-of-my-zx/main/dist/src/push_tag.js -v minor