## <5kyu>

Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

```python
domain_name("http://github.com/carbonfive/raygun") == "github" 
domain_name("http://www.zombie-bites.com") == "zombie-bites"
domain_name("https://www.cnet.com") == "cnet"
```

## Examples

```

```

### solution

```python
def domain_name(url):
    start = 0
    if url.find('www') != -1:
        start = url.find('www') + 4
    elif url.find('http://') != -1:
        start = url.find('http://') + 7
    elif url.find('https://') != -1:
        start = url.find('https://') + 8
    for i in range(start, len(url)):
        if url[i] == '.':
            return url[start:i]
```

## others's better solution

```python
def domain_name(url):
    return url.split("//")[-1].split("www.")[-1].split(".")[0]
```

