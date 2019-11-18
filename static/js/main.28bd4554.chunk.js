(this["webpackJsonpbudget-planner-homework"]=this["webpackJsonpbudget-planner-homework"]||[]).push([[0],{34:function(e,n,t){e.exports=t(54)},53:function(e,n,t){},54:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),u=t(9),o=t.n(u),i=t(7),l=t(10),c=t(26),p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1?arguments[1]:void 0,t=n.type,r=n.payload;switch(t){case"SAVE_BUDGET":return r;default:return e}},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1?arguments[1]:void 0,t=n.type,r=n.payload;switch(t){case"INPUT_CHANGE":return r;case"CLEAR_INPUT":return"";default:return e}},d=t(31),m=[],b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,n=arguments.length>1?arguments[1]:void 0,t=n.type,r=n.payload;switch(t){case"ADD_EXPENSE":return[].concat(Object(d.a)(e),[r]);case"REMOVE_EXPENSE":return e.filter((function(e){return e.id!==r}));default:return e}},f=t(27);function E(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function g(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?E(t,!0).forEach((function(n){Object(f.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):E(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var v={name:"",amount:""},x=Object(l.combineReducers)({budget:p,inputBudgetValue:s,expenses:b,inputExpenses:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,n=arguments.length>1?arguments[1]:void 0,t=n.type,r=n.payload;switch(t){case"INPUT_NAME_CHANGE":return g({},e,{name:r});case"INPUT_AMOUNT_CHANGE":return g({},e,{amount:r});case"CLEAR_INPUT":return v;default:return e}}}),h=Object(l.createStore)(x,Object(c.devToolsEnhancer)()),y=t(3),O=t(4),P=t(14),N=t(15),j=t(17),C=t(16),T=t(18),S=t(6);function w(){var e=Object(y.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 16px;\n  width: 100%;\n  border-radius: 2px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n"]);return w=function(){return e},e}var A=O.a.form(w()),I=function(e){var n=e.onSubmit,t=void 0===n?function(){return null}:n,r=e.children;return a.a.createElement(A,{onSubmit:t},r)};function _(){var e=Object(y.a)(["\n  display: inline-block;\n  font-size: 20px;\n  color: #171718;\n  cursor: pointer;\n  ","\n"]);return _=function(){return e},e}var k=O.a.label(_(),(function(e){return e.customStyles})),B=function(e){var n=e.children,t=e.customStyles;return a.a.createElement(k,{customStyles:t},n)};function D(){var e=Object(y.a)(["\n  color: #171718;\n  font: inherit;\n  font-size: 1.2rem;\n  padding: 16px;\n  border-radius: 4px;\n  border: 1px solid #bdbdbd;\n  width: 100%;\n  outline: 0;\n\n  &:focus {\n    border: 1px solid #2b32b2;\n  }\n"]);return D=function(){return e},e}var U=O.a.input(D()),R=function(e){var n=e.type,t=void 0===n?" text":n,r=e.value,u=void 0===r?"":r,o=e.onChange,i=void 0===o?function(){return null}:o,l=e.name,c=void 0===l?"":l,p=e.placeholder;return a.a.createElement(U,{type:t,value:u,onChange:i,name:c,placeholder:p})};R.defaultProps={name:"",placeholder:""};var V=R;function G(){var e=Object(y.a)(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  background-color: #3f51b5;\n  border: 0;\n  outline: 0;\n  padding: 8px 24px;\n  border-radius: 4px;\n  cursor: pointer;\n  box-shadow: 0px 2px 1px 1px rgba(0, 0, 0, 0.05);\n  font: inherit;\n  text-transform: uppercase;\n  user-select: none;\n\n  transition: background-color 200ms ease-in-out;\n\n  &:hover {\n    box-shadow: 0px 2px 1px 1px rgba(0, 0, 0, 0.15);\n    background-color: #303f9f;\n  }\n"]);return G=function(){return e},e}var H=O.a.button(G()),M=function(e){var n=e.type,t=e.label,r=e.onClick;return a.a.createElement(H,{type:n,onClick:r},t)};M.defaultProps={onClick:function(){return null},type:"button",label:""};var z=M,L=function(e){return{type:"SAVE_BUDGET",payload:Number(e)}},X=function(e){return e.budget},F=function(e){return e.inputBudgetValue},J=function(e){return e.inputExpenses.name},Y=function(e){return e.inputExpenses.amount},$=function(e){return e.expenses};t(24);S.a.configure({autoClose:6e3,draggable:!1});var q=function(e){function n(){var e,t;Object(P.a)(this,n);for(var r=arguments.length,a=new Array(r),u=0;u<r;u++)a[u]=arguments[u];return(t=Object(j.a)(this,(e=Object(C.a)(n)).call.apply(e,[this].concat(a)))).handleSubmit=function(e){e.preventDefault();var n=t.props,r=n.inputBudgetValue,a=n.saveBudget,u=n.clearInput;Number(r)<=0?S.a.error("Please enter valid budget amount!",{position:S.a.POSITION.TOP_CENTER}):(a(r),u())},t}return Object(T.a)(n,e),Object(N.a)(n,[{key:"render",value:function(){var e=this.props,n=e.inputBudgetValue,t=e.inputChange;return a.a.createElement(I,{onSubmit:this.handleSubmit},a.a.createElement(B,{customStyles:"\n  margin-bottom: 16px;  \n"},"Enter your total budget",a.a.createElement(V,{type:"number",value:n,onChange:t,placeholder:"Budget amount"})),a.a.createElement(z,{label:"Save",type:"submit"}))}}]),n}(r.Component),K={saveBudget:L,inputChange:function(e){return{type:"INPUT_CHANGE",payload:e.target.value}},clearInput:function(){return{type:"CLEAR_INPUT"}}},Q=Object(i.b)((function(e){return{inputBudgetValue:F(e)}}),K)(q),W=t(30),Z=t.n(W);S.a.configure({autoClose:6e3,draggable:!1});var ee=function(e){function n(){var e,t;Object(P.a)(this,n);for(var r=arguments.length,a=new Array(r),u=0;u<r;u++)a[u]=arguments[u];return(t=Object(j.a)(this,(e=Object(C.a)(n)).call.apply(e,[this].concat(a)))).handleSubmit=function(e){e.preventDefault();var n=t.props,r=n.clearInput,a=n.inputExpensesName,u=n.inputExpensesAmount,o=n.addExpense,i=n.budget;i?0!==a.trim().length?u<=0?S.a.error("Please enter valid transaction amount!",{position:S.a.POSITION.TOP_CENTER}):(u>i&&S.a.warn("Be careful! Your spending habbits are going to run you into debts!",{position:S.a.POSITION.TOP_CENTER}),o(a,u),r()):S.a.error("Please enter transaction name!",{position:S.a.POSITION.TOP_CENTER}):S.a.error("Please enter your budget first!",{position:S.a.POSITION.TOP_CENTER})},t}return Object(T.a)(n,e),Object(N.a)(n,[{key:"render",value:function(){var e=this.props,n=e.inputExpensesName,t=e.inputExpensesAmount,r=e.inputNameChange,u=e.inputAmountChange;return a.a.createElement(I,{onSubmit:this.handleSubmit},a.a.createElement(B,{customStyles:"\n  margin-bottom: 16px;  \n"},"Enter expense name",a.a.createElement(V,{type:"text",name:"name",value:n,onChange:r,placeholder:"Expense name"})),a.a.createElement(B,{customStyles:"\n  margin-bottom: 16px;  \n"},"Enter expense amount",a.a.createElement(V,{type:"number",name:"amount",value:t,onChange:u,placeholder:"Expense amount"})),a.a.createElement(z,{label:"Add",type:"submit"}))}}]),n}(r.Component),ne={inputNameChange:function(e){return{type:"INPUT_NAME_CHANGE",payload:e.target.value}},inputAmountChange:function(e){return{type:"INPUT_AMOUNT_CHANGE",payload:e.target.value}},clearInput:function(){return{type:"CLEAR_INPUT"}},addExpense:function(e,n){return{type:"ADD_EXPENSE",payload:{id:Z.a.generate(),name:e,amount:Number(n)}}}},te=Object(i.b)((function(e){return{inputExpensesName:J(e),inputExpensesAmount:Y(e),budget:X(e)}}),ne)(ee);function re(){var e=Object(y.a)(["\n  border-collapse: collapse;\n  text-align: center;\n  width: 100%;\n\n  tr {\n    border-bottom: 1px solid #212121;\n  }\n\n  td,\n  th {\n    padding-top: 8px;\n    padding-bottom: 8px;\n  }\n"]);return re=function(){return e},e}var ae=O.a.table(re()),ue={removeExpense:function(e){return{type:"REMOVE_EXPENSE",payload:e}}},oe=Object(i.b)((function(e){return{expenses:$(e)}}),ue)((function(e){var n=e.expenses,t=void 0===n?[]:n,r=e.removeExpense;return a.a.createElement(a.a.Fragment,null,t.length>0&&a.a.createElement(ae,null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"Expense name"),a.a.createElement("th",null,"Expense amount"),a.a.createElement("th",null))),a.a.createElement("tbody",null,t.map((function(e){var n=e.id,t=e.name,u=e.amount;return a.a.createElement("tr",{key:n},a.a.createElement("td",null,t),a.a.createElement("td",null,u),a.a.createElement("td",null,a.a.createElement(z,{label:"Delete",onClick:function(){return r(n)}})))})))))}));function ie(){var e=Object(y.a)(["\n  margin-top: 0;\n  margin-bottom: 0;\n  font-size: 48px;\n"]);return ie=function(){return e},e}function le(){var e=Object(y.a)(["\n  margin-top: 0;\n  margin-bottom: 8px;\n  text-transform: uppercase;\n  font-weight: 500;\n  font-size: 24px;\n"]);return le=function(){return e},e}function ce(){var e=Object(y.a)(["\n  text-align: center;\n  padding: 8px 24px;\n  color: ",";\n  user-select: none;\n"]);return ce=function(){return e},e}var pe=O.a.div(ce(),(function(e){return e.isPositive?"#388E3C":"#D32F2F"})),se=O.a.p(le()),de=O.a.p(ie()),me=function(e){var n=e.label,t=e.value,r=e.isPositive;return a.a.createElement(pe,{isPositive:r},a.a.createElement(se,null,n),a.a.createElement(de,null,t,"\xa0$"))};function be(){var e=Object(y.a)(["\n  display: inline-flex;\n  justify-content: space-between;\n  align-items: center;\n"]);return be=function(){return e},e}var fe=O.a.section(be()),Ee=Object(i.b)((function(e){return{budget:X(e),expenses:$(e)}}),null)((function(e){var n=e.budget,t=function(e){return e.reduce((function(e,n){return e+n.amount}),0)}(e.expenses),r=function(e,n){return e-n}(n,t);return a.a.createElement(fe,null,a.a.createElement(me,{label:"Budget",value:n,isPositive:!0}),a.a.createElement(me,{label:"Expenses",value:t,isPositive:!1}),a.a.createElement(me,{label:"Balance",value:r,isPositive:r>=0}))}));function ge(){var e=Object(y.a)(["\n  display: grid;\n  grid-template-columns: 340px 1fr;\n  align-items: flex-start;\n  grid-gap: 24px;\n  max-width: 960px;\n  padding-left: 16px;\n  padding-right: 16px;\n  margin-left: auto;\n  margin-right: auto;\n"]);return ge=function(){return e},e}var ve=O.a.div(ge()),xe=function(){return a.a.createElement(ve,null,a.a.createElement(Q,null),a.a.createElement(Ee,null),a.a.createElement(te,null),a.a.createElement(oe,null))};t(53);o.a.render(a.a.createElement(i.a,{store:h},a.a.createElement(xe,null)),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.28bd4554.chunk.js.map