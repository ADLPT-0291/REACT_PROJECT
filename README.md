# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

- npm create dev : tạo dự án react mới

# Library

- format code: thống nhất 1 dạng format
- khởi tạo git
- deploy lên server
- library: cần dùng trong dự án

## Khởi tạo git
- git init
- Tạo repo ở github và đẩy code lên

# Format code
- sử dụng thư viện prettier
``` bash
npm i prettier
```
- tạo file .prettierrc

- lên prettier playground để lấy thông tin cấu hình cho prettier. [prettier playground]
(https://prettier.io/playground/)

### Deploy lên server
- câu lệnh gì để có thể cài thư viện
```bash
npm install
```

- Câu lệnh gì để build được dự án

```bash
npm run build
```

## tổ chức thư mục 
1. Compoments
2. Templates
3. Pages
4. Routes
5. Store 
6. Hooks - (Hiện tại thì ít sử dụng)
7. Common
    7.1 Utils
    7.2 Helpers
    7.3 Constants
8. Services
9. 
## library cần dùng trong dự án
- react - router
- tailwindcss
- redux
- formik
- lucide-react(icon)
- librảy UI chưa sử dụng(...)
- axios (call api - đỡ cực hơn khi sử dụng so với fetch) 

## kiểm tra thư viện nào bị uot dated
```bash
npm outdate
```
-update thủ công những cái cần up
- npm i "react"@latest : "react" thư viện càn update

c2 : dùng thư viện update
 npx npm-check-updates -i
 # chọn thì nhấp space 
 lưu ý nên bỏ các eslint
 # enter để tiếp tục