---
title: Contribute
taxonomy:
  category: docs
---

Write for us!

If you feel we've missed out on something, or you wish to expand more on a particular topic, you can add your contributions to the docs. 

## How to Contribute

#### Editing an exisiting file 

* Go to the page you'd like to edit. 
* Click on "edit this page" on the top right hand corner. 
* You'll be directed to our Github repository where you can edit the markdown file.
* You'll need a GitHub account to make edits. Once you're done making changes, submit your changes (pull request). 
* We will review your changes and approve them, or send them back for changes. 

#### Creating a new page

Our docs run on a flat-file CMS called Grav. All the pages you see have been written in Markdown. You can check out our [Markdown Guide](../..//write-for-us/markdown-guide) to learn more. 

Since we're using Grav and its documentation theme, we need to ensure that every page follows the page type requirements specified by Grav. 

So, if you are adding a new page to the docs, you need keep the following instructions in mind: 

* **Create a new folder for your page:** It should start with a number to indicate its heirarchy in the parent folder. For example, let's say that your parent folder is `01.sandbox` and has two pages in the folders `01.install` and `02.use`. You want to add a new page between both called `setup`. To do this, you need to rename the folder `02.use` to `03.use` and create a new folder named `02.setup`.  The folder name should be in small letters with no spaces and only hyphens between words. 

* **Each folder should contain only one markdown file**. Each of the folders represent a page. This means that there should only be one markdown file in each folder. When you create and save your markdown file, make sure you name it `docs.md`.  

* **Your markdown file should have a YAML statement before your content**. Before you start writing in your markdown file, you need to add some YAML (YAML Ain't Markup Language) statements. These statements help the CMS ensure that your page has the right formatting and is discoverable in the docs. Your YAML statements should look like this:

```
---
title: Your Page Name/Title 
	taxonomy: 
	category: docs
---

```
The only thing that changes in this code from page to page is the page name. 

* **Include your media files in the same folder**. Any images or gifs you want to include in your page should be saved in the same folder as your page's markdown file. 

* **Use the YouTube plugin code to add an embedded version of the video**. Use the following code to embed a YouTube video on your page. 
```
[plugin:youtube](https://www.youtube.com/your-url)
```


Check out our [Style Guide](../..//write-for-us/style-guide) while writing to see how you can edit your page before review. 

Our [Markdown Guide](../..//write-for-us/markdown-guide) will help you understand how to write different headings, add images, notes, warning, information, hyperlinks, using anchors and more. 



