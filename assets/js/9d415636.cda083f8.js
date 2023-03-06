"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1967],{6889:(e,o,a)=>{a.r(o),a.d(o,{assets:()=>c,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var t=a(7462),l=(a(7294),a(3905)),n=a(214);const i={title:"Dialog.ScrollArea"},r=void 0,s={unversionedId:"components/Dialog/DialogScrollArea",id:"components/Dialog/DialogScrollArea",title:"Dialog.ScrollArea",description:"A component to show a scrollable content in a Dialog. The component only provides appropriate styling.",source:"@site/docs/components/Dialog/DialogScrollArea.mdx",sourceDirName:"components/Dialog",slug:"/components/Dialog/DialogScrollArea",permalink:"/react-native-paper/docs/components/Dialog/DialogScrollArea",draft:!1,editUrl:"https://github.com/callstack/react-native-paper/tree/main/src/components/Dialog/DialogScrollArea.tsx",tags:[],version:"current",frontMatter:{title:"Dialog.ScrollArea"},sidebar:"components",previous:{title:"Dialog.Icon",permalink:"/react-native-paper/docs/components/Dialog/DialogIcon"},next:{title:"Dialog.Title",permalink:"/react-native-paper/docs/components/Dialog/DialogTitle"}},c={},p=[{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2}],g={toc:p};function m(e){let{components:o,...a}=e;return(0,l.kt)("wrapper",(0,t.Z)({},g,a,{components:o,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"A component to show a scrollable content in a Dialog. The component only provides appropriate styling.\nFor the scrollable content you can use ",(0,l.kt)("inlineCode",{parentName:"p"},"ScrollView"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"FlatList")," etc. depending on your requirement."),(0,l.kt)("div",{class:"screenshots"},(0,l.kt)("figure",null,(0,l.kt)("img",{class:"small",src:"/react-native-paper/screenshots/dialog-scroll-area.gif"}))),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import * as React from 'react';\nimport { ScrollView } from 'react-native';\nimport { Dialog, Portal, Text } from 'react-native-paper';\n\nconst MyComponent = () => {\n  const [visible, setVisible] = React.useState(false);\n\n  const hideDialog = () => setVisible(false);\n\n  return (\n    <Portal>\n      <Dialog visible={visible} onDismiss={hideDialog}>\n        <Dialog.ScrollArea>\n          <ScrollView contentContainerStyle={{paddingHorizontal: 24}}>\n            <Text>This is a scrollable area</Text>\n          </ScrollView>\n        </Dialog.ScrollArea>\n      </Dialog>\n    </Portal>\n  );\n};\n\nexport default MyComponent;\n")),(0,l.kt)("h2",{id:"props"},"Props"),(0,l.kt)(n.Z,{link:"Dialog/DialogScrollArea",mdxType:"PropTable"}))}m.isMDXComponent=!0}}]);