## <4kyu>

Your task in this Kata is to emulate text justification in monospace font. You will be given a single-lined text and the expected justification width. The longest word will never be greater than this width.

Here are the rules:

- Use spaces to fill in the gaps between words.
- Each line should contain as many words as possible.
- Use '\n' to separate lines.
- Gap between words can't differ by more than one space.
- Lines should end with a word not a space.
- '\n' is not included in the length of a line.
- Large gaps go first, then smaller ones ('Lorem--ipsum--dolor--sit-amet,' (2, 2, 2, 1 spaces)).
- Last line should not be justified, use only one space between words.
- Last line should not contain '\n'
- Strings with one word do not need gaps ('somelongword\n').

Example with width=30:

```
Lorem  ipsum  dolor  sit amet,
consectetur  adipiscing  elit.
Vestibulum    sagittis   dolor
mauris,  at  elementum  ligula
tempor  eget.  In quis rhoncus
nunc,  at  aliquet orci. Fusce
at   dolor   sit   amet  felis
suscipit   tristique.   Nam  a
imperdiet   tellus.  Nulla  eu
vestibulum    urna.    Vivamus
tincidunt  suscipit  enim, nec
ultrices   nisi  volutpat  ac.
Maecenas   sit   amet  lacinia
arcu,  non dictum justo. Donec
sed  quam  vel  risus faucibus
euismod.  Suspendisse  rhoncus
rhoncus  felis  at  fermentum.
Donec lorem magna, ultricies a
nunc    sit    amet,   blandit
fringilla  nunc. In vestibulum
velit    ac    felis   rhoncus
pellentesque. Mauris at tellus
enim.  Aliquam eleifend tempus
dapibus. Pellentesque commodo,
nisi    sit   amet   hendrerit
fringilla,   ante  odio  porta
lacus,   ut   elementum  justo
nulla et dolor.
```

Also you can always take a look at how justification works in your text editor or directly in HTML (css: text-align: justify).

## Examples

```
내가 뭘 놓치고 있는지 모르겠다...  702 / 719
```

### solution

```python
def make_space(answer, array, width, length):
    string = ""
    if len(array) == 1:
        string += array[0]
        answer.append(string)
        return 
    temp = (width - length) // (len(array) - 1)
    namuzi = (width - length) % (len(array) - 1)
    for i in range(1, len(array)):
        string += array[i - 1]
        for j in range(temp):
            string += " "
        if i <= namuzi:
            string += " "
    string += array[-1]
    answer.append(string)


def justify(text, width):
    text_array = list(map(str, text.split()))
    answer = []
    value = 0
    temp = []
    for i in text_array:
        if len(i) + value + len(temp) >= width:
            make_space(answer, temp, width, value)
            value = 0
            temp = []
            temp.append(i)
            value += len(i)
        else:
            temp.append(i)
            value += len(i)
    if len(temp) == 1:
        answer.append(temp[0])
    else:
        answer.append(' '.join(temp))
    return '\n'.join(answer)
```

## others's better solution

```python

```

