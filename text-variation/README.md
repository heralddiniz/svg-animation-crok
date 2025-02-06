# Text Gradient Hover Animation

Esta é uma variação do efeito de gradiente que funciona com texto. O texto é renderizado como SVG para permitir o efeito de gradiente que segue o cursor.

## 🎨 Características

- Texto SVG com gradiente animado
- Gradiente interativo que segue o cursor
- Transições suaves de cores
- Performance otimizada
- Fonte Poppins do Google Fonts

## 📝 Como Personalizar

### Texto

No arquivo `index.html`, modifique o conteúdo do texto dentro da tag `<text>`:
```html
<text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" fill="url(#textGradient)">
    Seu Texto Aqui
</text>
```

### Estilo do Texto

No arquivo `styles.css`, você pode ajustar:

```css
.text-mask text {
    font-size: 72px;          /* Tamanho da fonte */
    font-weight: 700;         /* Peso da fonte */
    text-transform: uppercase; /* Transformação do texto */
    letter-spacing: 2px;      /* Espaçamento entre letras */
}
```

### Cores do Gradiente

No arquivo `script.js`, modifique as cores:
```javascript
const startColor = '#10b981'; // Cor quando hover
const endColor = '#404040';   // Cor padrão
```

### Dimensões do Elemento SVG

No arquivo `styles.css`, ajuste o tamanho do elemento SVG que contém o texto:
```css
.text-mask { /* Classe aplicada ao elemento <svg> */
    width: 600px;  /* Largura do container SVG */
    height: 100px; /* Altura do container SVG */
}
```

Estas dimensões devem corresponder à proporção definida no `viewBox="0 0 600 100"` do SVG no HTML.

## 🚀 Performance

O código inclui várias otimizações:
- Uso de `requestAnimationFrame` para animações suaves
- Throttling de eventos do mouse (limitado a 60fps)
- Hardware acceleration com `transform` e `will-change`
- Cache de valores calculados e elementos DOM
- Transições CSS otimizadas

## 💡 Dicas

1. Ajuste o `viewBox` do SVG se o texto for muito longo
2. Use fontes mais pesadas para melhor efeito visual
3. Ajuste o raio do gradiente (`r="50%"` no SVG) conforme o tamanho do texto
4. Para textos mais longos, considere aumentar a largura do SVG (600px por padrão)
5. O gradiente é mais visível em fontes com traços mais grossos
