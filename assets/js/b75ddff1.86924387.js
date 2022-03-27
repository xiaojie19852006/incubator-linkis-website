"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[9059],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return h}});var i=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=i.createContext({}),u=function(e){var t=i.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=u(e.components);return i.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(a),h=n,k=m["".concat(o,".").concat(h)]||m[h]||p[h]||r;return a?i.createElement(k,l(l({ref:t},c),{},{components:a})):i.createElement(k,l({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var u=2;u<r;u++)l[u]=a[u];return i.createElement.apply(null,l)}return i.createElement.apply(null,a)}m.displayName="MDXCreateElement"},55891:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return u},toc:function(){return c},default:function(){return m}});var i=a(87462),n=a(63366),r=(a(67294),a(3905)),l=["components"],s={title:"Release Notes 1.1.0-RC1",sidebar_position:0},o=void 0,u={unversionedId:"release-notes-1.1.0",id:"release-notes-1.1.0",isDocsHomePage:!1,title:"Release Notes 1.1.0-RC1",description:"Apache Linkis(incubating) 1.1.0 includes all of Project Linkis-1.1.0.",source:"@site/docs/release-notes-1.1.0.md",sourceDirName:".",slug:"/release-notes-1.1.0",permalink:"/docs/1.1.0/release-notes-1.1.0",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/docs/release-notes-1.1.0.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Release Notes 1.1.0-RC1",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/1.1.0/introduction"},next:{title:"Version Overview",permalink:"/docs/1.1.0/release"}},c=[{value:"New Feature",id:"new-feature",children:[]},{value:"Enhancement",id:"enhancement",children:[]},{value:"Bugs Fix",id:"bugs-fix",children:[]},{value:"other",id:"other",children:[]},{value:"Credits",id:"credits",children:[]}],p={toc:c};function m(e){var t=e.components,a=(0,n.Z)(e,l);return(0,r.kt)("wrapper",(0,i.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Apache Linkis(incubating) 1.1.0 includes all of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-linkis/projects/14"},"Project Linkis-1.1.0"),"."),(0,r.kt)("p",null,"This version is the first version of Linkis entering Apache incubation. It mainly completes the ASF infrastructure construction, including license improvement/package name modification, etc. In addition, features such as EngineConn support for Operators are added, and bugs in version 1.0.3 reported by the community are fixed."),(0,r.kt)("p",null,"The following key features are added: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Provide data-source management service, support CURD operation and connectivity test of data source through RestFul API;"),(0,r.kt)("li",{parentName:"ul"},"Provide metadata management service, support querying metadata through RestFul interface, components include ","[hive\\kafka\\mysql\\es]",";"),(0,r.kt)("li",{parentName:"ul"},"Provide data-source and metadata management client;"),(0,r.kt)("li",{parentName:"ul"},"Provide linkis web for data-source manage;"),(0,r.kt)("li",{parentName:"ul"},"Add spotless plugin to format java code")),(0,r.kt)("p",null,"Abbreviations:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"CGS: Computation Governance Services"),(0,r.kt)("li",{parentName:"ul"},"PES: Public Enhancement Services"),(0,r.kt)("li",{parentName:"ul"},"MGS: Microservice Governance Services"),(0,r.kt)("li",{parentName:"ul"},"EC:  Engineconn"),(0,r.kt)("li",{parentName:"ul"},"ECM: EngineConnManager"),(0,r.kt)("li",{parentName:"ul"},"DMS: Data Source Manager Service"),(0,r.kt)("li",{parentName:"ul"},"MDS: MetaData Manager Service")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"new-feature"},"New Feature"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[","DMS-Common]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1335"},"[Linkis-1335]")," Add new module linkis-datasource-manager-common,Define data source data structure, ERROR, tool class."),(0,r.kt)("li",{parentName:"ul"},"[","DMS-Server]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1352"},"[Linkis-1352]"),"  Add new module linkis-datasource-manager-server\uff0cThe data source management service is defined, and functions such as adding, deleting, checking, and modifying data sources, and connection testing are provided through the restful interface."),(0,r.kt)("li",{parentName:"ul"},"[","MDS-Common]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1356"},"[Linkis-1356]")," Add new module linkis-metadata-manager-common\uff0cDefines the metadata data structure, ERROR, and tool classes."),(0,r.kt)("li",{parentName:"ul"},"[","MDS-Server]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1356"},"[Linkis-1356]")," Add new module linkis-metadata-manager-server\uff0cThe metadata management service is defined, and the database, table, and column query of metadata is provided through the restful interface."),(0,r.kt)("li",{parentName:"ul"},"[","MDS-Services]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1366"},"[Linkis-1366]")," Add new module linkis-metadata-manager-service-es\uff0cDefines metadata management services for es."),(0,r.kt)("li",{parentName:"ul"},"[","MDS-Services]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1368"},"[Linkis-1368]")," Add new module linkis-metadata-manager-service-hive\uff0cDefines a metadata management service for hive."),(0,r.kt)("li",{parentName:"ul"},"[","MDS-Services]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1371"},"[Linkis-1371]")," Add new module linkis-metadata-manager-service-kafka\uff0cDefines metadata management services for kafka."),(0,r.kt)("li",{parentName:"ul"},"[","MDS-Services]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1373"},"[Linkis-1373]")," Add new module linkis-metadata-manager-service-mysql\uff0cDefines metadata management services for mysql."),(0,r.kt)("li",{parentName:"ul"},"[","DMS&MDS-Client]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1418"},"[Linkis-1418]")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1434"},"[Linkis-1434]"),(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1438"},"[Linkis-1438]"),(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1441"},"[Linkis-1441]")," Add new module linkis-datasource-client\uff0cconvenient to manage data sources through sdk. "),(0,r.kt)("li",{parentName:"ul"},"[","DMS&MDS-Web]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1456"},"[Linkis-1456]")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1510"},"[Linkis-1510]"),"add linkis datasource web\uff0cThis page allows simple creation and searching of data sources. ")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"enhancement"},"Enhancement"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[","Commons]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1339"},"[Linkis-1339]"),"  Add knife4j to linkis so that user can use apiDoc during development and debugging code"),(0,r.kt)("li",{parentName:"ul"},"[","MGS-LinkisServiceGateway]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1377"},"[Linkis-1377]")," involve skywalking agent for linkis services "),(0,r.kt)("li",{parentName:"ul"},"[","Commons]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1378"},"[Linkis-1378]"),(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1389"},"[Linkis-1389]"),"  add spotless plugin to format code"),(0,r.kt)("li",{parentName:"ul"},"[","CGS-EngineConnPlugin]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1408"},"[Linkis-1408]")," Reduce the maximum idle time of engine resources"),(0,r.kt)("li",{parentName:"ul"},"[","CGS-EngineConnPlugin]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1535"},"[Linkis-1535]")," set the value of JAVA_ENGINE_REQUEST_INSTANCE is constant 1 "),(0,r.kt)("li",{parentName:"ul"},"[","DB]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1554"},"[Linkis-1554]"),(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1651"},"[Linkis-1651]"),"  Add DataSource DDL and DML SQL"),(0,r.kt)("li",{parentName:"ul"},"[","MDS] ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1583"},"[Linkis-1583]")," Add feature to fetch properties of partition in Hive datasource and fix connection problem"),(0,r.kt)("li",{parentName:"ul"},"[","MGS-LinkisServiceGateway]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1636"},"[Linkis-1636]")," Use regex to match against gateway URLs, if matched, let them pass"),(0,r.kt)("li",{parentName:"ul"},"[","DMS&MDS] ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1637"},"[Linkis-1637]")," Add Unit Test For DataSource-1.1.0"),(0,r.kt)("li",{parentName:"ul"},"[","DMS&MDS-Client] ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1643"},"[Linkis-1643]"),"  optimize datasource client unnecessary parameters and uniform dataSourceId parameter name "),(0,r.kt)("li",{parentName:"ul"},"[","DMS&MDS] ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1660"},"[Linkis-1660]")," use spring-boot-starter-jetty(wip) "),(0,r.kt)("li",{parentName:"ul"},"[","DMS&MDS] ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1717"},"[Linkis-1717]")," adjust module order to avoid missing server/* datasource lib")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"bugs-fix"},"Bugs Fix"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[","Deployment]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1390"},"[Linkis-1390]"),"  fix the issue 1314 which is a bug, create the resultset path in install script to make sure all dss users can access this path"),(0,r.kt)("li",{parentName:"ul"},"[","Commons]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1469"},"[Linkis-1469]")," fix issue #1358, when sql contains ';', the SQL cannot be cut correctly  "),(0,r.kt)("li",{parentName:"ul"},"[","MGS-LinkisServiceGateway]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1508"},"[Linkis-1508]")," Fix issue knife4j will cause an exception to the gateway startup"),(0,r.kt)("li",{parentName:"ul"},"[","CGS-EngineConnPlugin-JDBC]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1529"},"[Linkis-1529]")," Fix the issue of JDBC engine execution error:21304, Task is Failed,errorMsg: NullPointerException: #1421"),(0,r.kt)("li",{parentName:"ul"},"[","Commons]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1530"},"[Linkis-1530]")," Fix jetty conflict issue,exclude jetty import in spring-jetty"),(0,r.kt)("li",{parentName:"ul"},"[","CGS-Entrance]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1540"},"[Linkis-1540]")," ","[fix #1538]",' Fix bug of "kill" method in linkis-entrance to support null param "taskID"'),(0,r.kt)("li",{parentName:"ul"},"[","Commons]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1600"},"[Linkis-1600]")," Fix this isse caused by the low version of commons-compress"),(0,r.kt)("li",{parentName:"ul"},"[","CGS-Client]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1603"},"[Linkis-1603]")," fix client unsupport -runtimeMap param "),(0,r.kt)("li",{parentName:"ul"},"[","CGS-EngineConnPlugin-JDBC]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1610"},"[Linkis-1610]"),' fix jdbc engine postgresql unsupport sql "show databases;" lead to exec fail'),(0,r.kt)("li",{parentName:"ul"},"[","Commons]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1618"},"[Linkis-1618]")," fix ","[Bug]"," The xml annotation of the Message object should be removed #1607"),(0,r.kt)("li",{parentName:"ul"},"[","CGS-EngineConnPlugin-JDBC]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1646"},"[Linkis-1646]")," fix the value is displayed as the object address when the JDBC engine queries complex type fields."),(0,r.kt)("li",{parentName:"ul"},"[","CGS-EngineConnPlugin-PYTHON]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1731"},"[Linkis-1731]")," Fix the problem that the result set field row of the python engine's showDF function is reversed ")),(0,r.kt)("h2",{id:"other"},"other"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[","Commons]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1397"},"[Linkis-1397]")," Add maven wrapper"),(0,r.kt)("li",{parentName:"ul"},"[","EC]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1425"},"[Linkis-1425]")," unify the log config file of ec to log4j2.xml"),(0,r.kt)("li",{parentName:"ul"},"[","ALL]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1571"},"[Linkis-1571]")," adjust distribution.xml:exclude unnecessary dependency"),(0,r.kt)("li",{parentName:"ul"},"[","MDS&DMS]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1599"},"[Linkis-1599]"),"  Add new 3rd party apps add license file   ")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"credits"},"Credits"),(0,r.kt)("p",null,"The release of Apache Linkis(incubating) 1.1.0 is inseparable from the contributors of the Linkis community. Thanks to all the community contributors!"))}m.isMDXComponent=!0}}]);