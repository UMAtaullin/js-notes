# Горячие клавиши
Ctrl + B - скрывать боковую панель
Ctrl + ~ - открыть/закрыть терминал

# Git

## перейти к нужному комиту
git log --graph --all --oneline
git checkout <хеш комита>

# ветки
git branch new_branch      # создать новую ветку с указанным именем на текущем коммите
git checkout new_branch    # перейти в указанную ветку
git push -u origin new_branch
git branch -d <имя_ветки>  # удалить ветку

## публикация репозитория
git init
touch readme.md
git add .
git commit -m 'Initial commit'
git push -u origin master

## стянуть изменеия с гитхаба
git checkout <имя ветки>
git pull

## откат комитов переписать на безопасный
git log 
git revert -m "Ваше сообщение" <commit-hash>
git push 

## откат .gitignore
git rm -r --cached .idea
git add .gitignore
git commit -m '.idea added gitignore'
git push  

#history
1. npx create-react-app .
2. npm i react-router-dom -save
3. sudo npm install -g react-devtools
