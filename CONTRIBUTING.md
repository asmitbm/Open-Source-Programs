This site is made using <a href="https://github.com/jekyll">
  <img align="center" src="https://img.shields.io/badge/Jekyll-CC0000?style=for-the-badge&logo=Jekyll&logoColor=white"/>
</a>

Read the installation guide of Jekyll [here](https://jekyllrb.com/docs/installation/).

After you are done installing run...
```
bundle exec jekyll serve --baseurl=""
```

Go to...
```
http://localhost:4000 or http://127.0.0.1:4000
```

To add new programs to the list, make changes in the respective YAML files:

* Open Source Competitions (`oss-comp.yml`) 
* SOC Programs (`soc-programs.yml`)
* University SoC/WoC (`university-soc.yml`)

The table generates content from the format based on:

```
   - name: Hacktoberfest
     link: https://hacktoberfest.digitalocean.com/
     awards: Swag Rewards
     timeline: https://hacktoberfest.digitalocean.com/details
```
Points to note: 

* Please follow the indentation properly
* If Timeline of a program isn't available, remove `timeline` key.
* If `awards` aren't mentioned on the website, assign the value `N/A` in front of it.
* Make sure to enter add files in their respective YAML files only