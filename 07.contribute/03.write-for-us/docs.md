---
title: Write for Us
taxonomy:
  category: docs
---

As High Fidelity has features that are constantly changing and growing as the product evolves, we need to ensure that our documentation reflects the latest information. We would love to have you contribute to our documentation and help us keep it up-to-date!

Our docs run on a flat-file CMS called [Grav](https://getgrav.org). All of the pages are written in markdown and automatically compiled into HTML and cached for performance. 

**On This Page**
* [Edit an Existing File](#edit-an-existing-file)
* [Create a New Page](#create-a-new-page)
* [Markdown Guide](#markdown-guide)

## Edit an Existing File
>>>>> The API documentation is generated using automated processes. At this time, these pages cannot be edited.  

1. Go to the page you'd like to edit. 
2. At the top of the page, click "Edit this page" next to the page's breadcrumbs. 
3. You'll be directed to our GitHub repository where you can edit the markdown file. For more information about editing files in Markdown, see our [Markdown Guide](#markdown-guide). 
4. You'll need a GitHub account to make edits. Once you're done making changes, create a pull request (PR) with your changes. 
5. We will review your changes and approve them, or send them back for changes. 

## Create a New Page

Since we're using Grav and its documentation theme, we need to ensure that every page follows the page type requirements specified by Grav. This is particularly important when you are creating a new page for our documentation. 

Here are the specifications for new pages in our documentation system: 

1. Each page has its own folder. The folder name starts with the a number that indicates its hierarchy in the parent folder. The folder name should be in small letters with no spaces and only hyphens between words. The image below shows you an example folder structure, along with the Table of Contents output that you would see.  ![](folder-structure.png)
>>>>>Because each of the folders represent a page, there should always be only one markdown file in each folder. When you create and save your markdown file, make sure you name it `docs.md`.  
2. All markdown files start with a YAML statement before the content. These statements help the CMS ensure that your page has the right formatting and is discoverable in the docs. Your YAML statements should look like this:

```
---
title: %Your Page Name/Title %
	taxonomy: 
	category: docs
---

```
3. Any images or gifs you want to include in your page should be saved in the same folder as your page's markdown file. 
4. Use the YouTube plugin code to add an embedded version of the video. Your code should look like this: 
```
[plugin:youtube](https://www.youtube.com/your-url)
```

## Markdown Guide
All of High Fidelity's documentation is written in Markdown. _Markdown_ is a lightweight markup language with plain text formatting syntax. Its design allows it to be converted to many output formats, including HTML. 

* [Headings](#headings)
* [Emphasis](#emphasis)
* [Line Breaks](#line-breaks)
* [Blockquotes](#blockquotes)
* [Notices](#notices)
* [Lists](#lists)
* [Tables](#tables)
* [Images](#images)
* [Links](#links)
* [Code Samples](#code-samples)
* [Horizontal Rules](#horizontal-rules)

>>>>>Using Markdown doesn't mean that you can't also use HTML. You can add HTML tags to any Markdown file. This is helpful if you prefer certain HTML tags to Markdown syntax, or if you need to use complex formatting that is not supported by Markdown.

#### Headings
| Markdown Syntax  | HTML  | Output  |
|---|---|---|
| # h1 Heading  | &lt;h1>h1 Heading&lt;/h1>  | <h1>h1 Heading</h1> |
| ## h2 Heading  | &lt;h2>h2 Heading&lt;/h2>  | <h2>h2 Heading</h2> |
| ### h3 Heading  | &lt;h3>h3 Heading&lt;/h3>  | <h3>h3 Heading</h3> |
| #### h4 Heading  | &lt;h4>h4 Heading&lt;/h4>  | <h4>h4 Heading</h4> |
| ##### h5 Heading  | &lt;h5>h5 Heading&lt;/h5>  | <h5>h5 Heading</h5> |
| ###### h6 Heading  | &lt;h6>h6 Heading&lt;/h6>  | <h6>h6 Heading</h6> |

#### Emphasis  
If there is more than one markdown syntax listed, feel free to use any of them. The output will be the same.

| Markdown Syntax  | HTML  | Output  |
|---|---|---|
| *italicized text*<br />\_italicized text_  | &lt;em>italicized text&lt;/em>  | *italicized text* |
| \**bold text**<br />\__bold text__  | &lt;strong>bold text&lt;/strong>  | **bold text** |
| \***bold AND italicized text***<br />\___bold AND italicized text___  | &lt;strong>&lt;em>bold text&lt;/em>&lt;/strong>  | ***bold AND italicized text*** |
| ​~​~​strikethrough~~  | &lt;del>strikethrough&lt;/del>  | ~~strikethrough~~ |

#### Line Breaks
To create paragraphs, use a blank line to separate one or more lines of text. You should not indent paragraphs with spaces or tabs.

To create a line break, end a line with two or more spaces, and then hit return.

| Markdown Syntax  | HTML  | Output  |
|---|---|---|
| I really like using Markdown.<p>I think I'll use it to format all of my documents from now on.  | &lt;p>I really like using Markdown.&lt;/p><p>&lt;p>I think I'll use it to format all of my documents from now on.&lt;/p>  | I really like using Markdown.<p>I think I'll use it to format all of my documents from now on. |
| This is the first line.<br />And this is the second line.  | &lt;p>This is the first line.&lt;br>And this is the second line.&lt;/p>  | This is the first line.<br />And this is the second line. |

#### Blockquotes
To create a blockquote, add a > in front of a paragraph.

```
> This is a blockquote
```
The rendered output looks like this:
> This is a blockquote.

Blockquotes can contain multiple paragraphs. Add a > on the blank lines between the paragraphs.

```
> This is a blockquote. 
>
> It has a second paragraph.
```
The rendered output looks like this:
> This is a blockquote. 
>
> It has a second paragraph.

You can also nest blockquotes: 
```
> This is a blockquote. 
>> The second paragraph is nested.
```
The rendered output looks like this:
> This is a blockquote. 
>
> > The second paragraph is nested.

#### Notices
We have four different notices that are used in our documentation.  

>>> \>>> Yellow messages are informational and preceded by three \> symbols.  

<p></p>
>>>> \>>>> Red messages warns the user about something and are preceded by four \> symbols.  

<p></p>
>>>>> \>>>>> Blue messages are notes that give more information to the user and need to stand out. They are preceded by five \> symbols.

<p></p>
>>>>>> \>>>>>> Green messages are tips that help the user do something. They are preceded by six \> symbols.  

#### Lists 
To create an ordered list, add line items with numbers followed by periods. The numbers don’t have to be in numerical order, but the list should start with the number one.  

To create an unordered list, add dashes (-), asterisks (*), or plus signs (+) in front of line items. Indent one or more items to create a nested list.

| Markdown Syntax  | HTML  | Output  |
|---|---|---|
| 1. First item<br />2. Second item<br />3. Third item<br />4. Fourth item  | &lt;ol><br />&lt;li>First item&lt;/li><br />&lt;li>Second item&lt;/li><br />&lt;li>Third item&lt;/li><br />&lt;li>Fourth item&lt;/li><br />&lt;/ol>  | 1. First item<br />2. Second item<br />3. Third item<br />4. Fourth item |
| 1. First item<br />2. Second item<br />3. Third item<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. Indented item<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. Indented item<br />4. Fourth item  | &lt;ol><br />&lt;li>First item&lt;/li><br />&lt;li>Second item&lt;/li><br />&lt;li>Third item<br />&lt;ol><br />&lt;li>Indented item&lt;/li><br />&lt;li>Indented item&lt;/li><br />&lt;/ol><br />&lt;/li><br />&lt;li>Fourth item&lt;/li><br />&lt;/ol>  | 1. First item<br />2. Second item<br />3. Third item<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. Indented item<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. Indented item<br />4. Fourth item |
| \* First item<br />\* Second item<br />\* Third item<br />\* Fourth item  | &lt;ul><br />&lt;li>First item&lt;/li><br />&lt;li>Second item&lt;/li><br />&lt;li>Third item&lt;/li><br />&lt;li>Fourth item&lt;/li><br />&lt;/ul>  | <ul><li>First item</li><li>Second item</li><li>Third item</li><li>Fourth item</li></ul> |
| \+ First item<br />\+ Second item<br />\+ Third item<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\+ Indented item<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\+ Indented item<br />\+ Fourth item  | &lt;ol><br />&lt;li>First item&lt;/li><br />&lt;li>Second item&lt;/li><br />&lt;li>Third item<br />&lt;ol><br />&lt;li>Indented item&lt;/li><br />&lt;li>Indented item&lt;/li><br />&lt;/ol><br />&lt;/li><br />&lt;li>Fourth item&lt;/li><br />&lt;/ol>  | <ul><li>First item</li><li>Second item</li><li>Third item<ul><li>Indented item</li><li>Indented item</li></ul></li><li>Fourth item</li></ul> |

#### Tables
Tables are created by adding pipes as dividers between each cell, and by adding a line of dashes (also separated by bars) beneath the header. Note that the pipes do not need to be vertically aligned.  

Markdown Syntax: 
```
| Column A | Column B | Column C |
|----------|----------|----------|
| 1        | A        | !        |
| 2        | B        | @        |
```
HTML Syntax: 
```
<table>
  <tr>
    <th>Column A</th>
    <th>Column B</th>
    <th>Column C</th>
  </tr>
  <tr>
    <td>1</td>
    <td>A</td>
    <td>!</td>
  </tr>
  <tr>
    <td>2</td>
    <td>B</td>
    <td>@</td>
  </tr>
</table>
```
Rendered output:   

| Column A | Column B | Column C |
|----------|----------|----------|
| 1        | A        | !        |
| 2        | B        | @        |

#### Images
| Markdown Syntax  | HTML  | Output  |
|---|---|---|
| \!\[alt text](image.png)  | &lt;img src="image.png" alt="alt text" />  | ![](icon.png) |

#### Links
| Markdown Syntax  | HTML  | Output  |
|---|---|---|
| &lt;https://www.highfidelity.com>  | &lt;a href="https://www.highfidelity.com"><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;https://www.highfidelity.com<br />&lt;/a>  | <https://www.highfidelity.com> |
| \[High Fidelity](https://www.highfidelity.com)  | &lt;a href="https://www.highfidelity.com">High Fidelity&lt;/a>  | [High Fidelity](https://www.highfidelity.com) |
| &lt;support@highfidelity.io>  | &lt;a href="mailto:support@highfidelity.io"><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;support@highfidelity.io<br />&lt;/a>  | <support@highfidelity.io> |

#### Code Samples 

| Markdown Syntax  | HTML  | Output  |
|---|---|---|
| \`inline code\`  | &lt;code>inline code&lt;/code>  | Here is some `inline code`. |
| \`\`\`<br />block<br />of<br />code<br />\`\`\`  | &lt;pre>block<br />of<br />code&lt;/pre>  | ![](code-block.png) |

#### Horizontal Rules
If there is more than one markdown syntax listed, feel free to use any of them. The output will be the same.

| Markdown Syntax  | HTML  | Output  |
|---|---|---|
| \___<br />\---<br />\***  | &lt;hr />  | <hr> |

**See Also**

+ [Get Started with High Fidelity](../../explore/get-started)