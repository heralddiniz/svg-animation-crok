# SVG Gradient Hover Animation

Este projeto implementa uma animação suave de gradiente em SVGs que reage ao movimento do mouse. A animação é construída usando apenas HTML, CSS e JavaScript vanilla, sem dependências de frameworks.

## 📁 Estrutura do Projeto

```
svg-animation-crok/
├── index.html      # Estrutura HTML e SVG
├── styles.css      # Estilos e animações
├── script.js       # Lógica de interatividade
└── README.md       # Este arquivo
```

## 🚀 Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (ES6+)
- SVG (Scalable Vector Graphics)

## 🎨 Funcionalidades

- Animação suave de gradiente
- Rastreamento do movimento do mouse
- Efeito de hover com transição suave
- Otimização de performance com requestAnimationFrame
- Suporte a múltiplos SVGs na mesma página

## 📌 Como Usar

1. Adicione a classe `flame` ao seu SVG:
```html
<div class="flame-container">
    <svg class="flame" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <defs>
            <radialGradient id="emeraldGradient" gradientUnits="userSpaceOnUse" r="35%" cx="50%" cy="50%">
                <stop class="gradient-stop" offset="0" stop-color="#404040" />
                <stop offset="1" stop-color="#404040" />
            </radialGradient>
        </defs>
        <!-- Seus paths aqui -->
    </svg>
</div>
```

2. Certifique-se de que os arquivos CSS e JavaScript estão linkados no seu HTML:
```html
<link rel="stylesheet" href="styles.css">
<script src="script.js"></script>
```

## ⚙️ Personalização

### Cores do Gradiente

No arquivo `script.js`, você pode modificar as cores do gradiente alterando estas variáveis:
```javascript
const startColor = '#10b981'; // Cor quando o mouse está sobre o SVG
const endColor = '#404040';   // Cor padrão
```

### Tamanho e Velocidade da Animação

No arquivo `styles.css`, você pode ajustar:

1. **Velocidade da Transição**:
```css
.flame {
    transition: all 0.2s ease-out; /* Ajuste o tempo (0.2s) conforme necessário */
}
```

2. **Tamanho do SVG**:
```css
.flame {
    width: 384px;  /* Ajuste conforme necessário */
    height: 384px; /* Ajuste conforme necessário */
}
```

3. **Espessura do Traço**:
```css
.flame-path-1, .flame-path-2 {
    stroke-width: 0.1; /* Espessura padrão */
}

.flame-container:hover .flame-path-1,
.flame-container:hover .flame-path-2 {
    stroke-width: 0.15; /* Espessura no hover */
}
```

### Comportamento do Gradiente

No arquivo `script.js`, você pode modificar:

1. **Raio do Gradiente**:
```javascript
gradient.setAttribute("r", "35%"); // Ajuste a porcentagem conforme necessário
```

2. **Deslocamento do Centro**:
```javascript
const cxPercentage = (x / rect.width) * 100 - 24; // Ajuste o valor 24 para mudar o deslocamento
```

## 🔍 Detalhes Técnicos

### Performance

O código inclui várias otimizações de performance:
- Uso de `requestAnimationFrame` para animações suaves
- Throttling de eventos do mouse (60fps)
- Otimizações CSS com `will-change` e `transform`
- Cache de elementos DOM

### Compatibilidade

- Funciona em todos os navegadores modernos
- Requer suporte a SVG e CSS3
- Recomendado usar em navegadores atualizados para melhor performance

## 🐛 Solução de Problemas

Se a animação não estiver funcionando:

1. Verifique se todos os arquivos estão corretamente linkados
2. Confirme se o SVG tem a classe `flame` e está dentro de um container com classe `flame-container`
3. Verifique se o SVG tem os atributos corretos (viewBox, xmlns)
4. Confirme se o gradiente e seus stops estão corretamente definidos
5. Abra o console do navegador para verificar possíveis erros

## 📝 Notas

- A animação é otimizada para performance, mas SVGs muito complexos podem afetar a fluidez
- Recomenda-se testar em diferentes dispositivos e navegadores
- Para melhor performance, evite usar muitos SVGs animados na mesma página

## 🤝 Contribuição

Sinta-se à vontade para contribuir com melhorias ou reportar problemas através de issues.
