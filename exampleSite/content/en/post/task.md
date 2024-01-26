+++
title = 'Task List'
date = '2024-01-26'
tags = ['feature']
type = 'post'
task = true
+++

## Task list in markdown

- [ ] task 1
- [X] task 2
- [ ] task 3

Now with `task = true` on preamble, task list is enabled for user input.
The bullet point still visible on Firefox based browser.

## Now with `task` declaration

{{< task >}}
- [ ] task 1
- [X] task 2
- [ ] task 3

Now task list is strikethrough when checked.
Unfortunately, this also only work in Chrome based browser due to limited CSS selector support on Firefox.
But the bullet poin is gone.

## Wrap in `task` environtment

{{< task "begin" >}}
{{< task item="task 1" >}}
{{< task item="task 2" >}}
{{< task item="task 3" >}}
{{< task "end" >}}

Use only if strikethrough on user input is necessary, so they don't miss a single step.
