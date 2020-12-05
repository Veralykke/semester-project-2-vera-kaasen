import displayMessage from "./components/common/displayMessage.js";
import makeMenu from "./components/common/menu.js";
import { storeToken, userSave } from "./components/common/storage.js";
import { url } from "./components/api.js";

makeMenu();

/*
<div class="container">
<div class="admin-container"></div>
<div class="loading">loading...</div>

<h1>Add products</h1>

<form class="form" action=".upload" method="post">
    <div class="message-container"></div>
    <div>
        <label for="title">Title</label>
        <input id="title">
    </div>
    <div>
        <label for="price">Price</label>
        <input id="price">
    </div>
    <div>
        <label for="description">Description</label>
        <input id="description">*/