(() => {
  const data = window.MC_DATA;
  const params = new URLSearchParams(location.search);
  const id = params.get("id");
  const resource = data.resources.find(item => item.id === id);

  const mount = document.querySelector("#resource-detail");
  if (!mount) return;

  if (!resource) {
    mount.innerHTML = `
      <div class="empty-state large">
        <span class="empty-icon">?</span>
        <h1>找不到这个资源</h1>
        <p>资源可能已经下架，或者链接填写有误。</p>
        <a class="button primary" href="resources.html">返回资源列表</a>
      </div>
    `;
    return;
  }

  const category = data.categories.find(item => item.id === resource.category);

  mount.innerHTML = `
    <div class="detail-grid">
      <div>
        ${resource.image
          ? `<img class="detail-image" src="${resource.image}" alt="${resource.title}">`
          : `<div class="detail-image placeholder"><span class="placeholder-cube">◆</span><span>${category?.name || "资源"}</span></div>`
        }
      </div>
      <div class="detail-content">
        <div class="eyebrow">${category?.name || "资源"} · ${resource.version}</div>
        <h1>${resource.title}</h1>
        <p class="lead">${resource.description}</p>
        <div class="tags">${resource.tags.map(tag => `<span>${tag}</span>`).join("")}</div>
        <div class="detail-actions">
          <a class="button primary" href="${resource.download}">立即下载</a>
          <a class="button ghost" href="${resource.tutorial}">安装教程</a>
        </div>
        <div class="notice">
          <strong>使用提示</strong>
          <p>下载后请优先阅读对应教程。实际版本、文件名与安装路径请以资源页面中的说明为准。</p>
        </div>
      </div>
    </div>
  `;
})();
