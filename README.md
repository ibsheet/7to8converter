# ibsheet7to8-Migration

## splitter (좌우 분할)
온라인에서 사용해야 정상동작합니다. tomcat에 올리거나 vscode Live Server를 실행하여 확인하세요.

## ibsheet7 에서 8로 변환 시 주의 사항
- ibsheet7은 CheckBox 타입에 대해 기본적으로 헤더체크가 표시되는데, ibsheet8은 Cfg에 HeaderCheck:1을 설정해야 표시됨. 따라서 ibsheet-common.js 에 추가가 필요


## 불편한 점에 대한 수정
마이그레이션 툴은 항상 수정이 필요합니다. 변환 중에 문제가 있다고 판단되는 부분은 수정하시고 git에 올려 공유해 주세요.
