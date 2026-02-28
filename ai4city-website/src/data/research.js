export const RESEARCH_FOCUS = [
  {
    id: 1, 
    title: "AI based 3D City Modeling",
    desc: `- Generative-AI based 3D modeling
- 3DGS, point cloud, mesh learning
- Multi-perspective/modal based reconstruction
- RS imagery interpretation`,
    img: "/images/research/AccuCities-Accurate-3D-site-models.png", 
    date: "Updated Oct 10 2025",
    example: "Just like the ULSR-GS",
    link: "https://www.sciencedirect.com/science/article/pii/S092427162500396X?via%3Dihub"
  },
  {
    id: 2, 
    title: "Spatio-temporal (4D) Data Fusion",
    desc: `- Multi-modal data representation learning
- Spatio-temporal causality
- AI Agentic workflow
- XR scene interaction`,
    img: "/images/research/spt.png", 
    date: "Updated Oct 10 2025",
    example: "Just like our gdverse package",
    link: "https://www.researchgate.net/publication/390204234_gdverse_An_R_Package_for_Spatial_Stratified_Heterogeneity_Family"
  },
  {
    id: 3, 
    title: "Built-environment and Urban System Understanding",
    desc: `- Low-altitude intelligence
- Urban health (mobility, human diseases)
- Disaster Assessment
- Carbon neutrality and thermal environment`,
    img: "/images/research/maxresdefault.jpg", 
    date: "Updated Oct 10 2025",
    example: "Just like the BuildingView",
    link: "https://www.sciencedirect.com/science/article/pii/S092427162500396X?via%3Dihub"
  }
];

export const RESEARCH_PROJECTS = [
  {
    id: 4, 
    title: "ULSR-GS：基于 Gaussian Splatting 的城市级大尺度表面重建",
    desc: "课题组最新提出的ULSR-GS[2]在此前的MVG-Splatting[3]工作基础上，提出 “点到图像（point-to-photo）分区 + 多视角引导稠密化 + 跨视深度/法向一致性约束”：为每个子区仅分配最相关影像，子区内以多视深度聚合与一致性损失进行稠密化优化，支持跨GPU并行训练并实现子区独立网格提取与无缝拼接；在多套城市级航测数据上，对现有GS方法取得稳定优势，并在总体耗时上显著优于传统基于MVS的方案。据上的泛化能力和计算效率，为遥感测绘、数字孪生等应用开拓新的技术路径。",
    img: "/images/news/ULSR/640.png", 
    date: "Updated Oct 10 2025",
    articleId: 'research-multimodal',
    link: "https://mp.weixin.qq.com/s/aNZjGcmorOJKLHZeelAmtw",
    topic: "Al based 3D City Modeling",
    year: "2026"
  },
  {
    id: 3, 
    title: "ICCV25—Sat2City：利用级联潜空间扩散模型实现单张卫星图像的高保真三维城市生成",
    desc: "Sat2City成功实现了扩散模型与体素表示的有效结合，首次证明了从单张2D卫星影像高效生成城市级3D模型的可行性。未来，团队研究将着重提升模型在真实城市遥感数据上的泛化能力和计算效率，为遥感测绘、数字孪生等应用开拓新的技术路径。项目主页：https://ai4city-hkust.github.io/Sat2City/",
    img: "/images/research/s2c.png", 
    date: "Updated Oct 10 2025",
    articleId: 'research-multimodal',
    link: "https://mp.weixin.qq.com/s/Kl8IiA1A_vgr0P1F-yr30Q",
    topic: "Built-environment and Urban System Understanding",
    year: "2025"
  },
  {
    id: 2, 
    title: "Depth2Elevation：基于视觉基础模型迁移的单视图遥感图像高程估计",
    desc: "Depth2Elevation模型通过引入尺度调制器和分辨率自适应解码器，有效地将DAM的深度估计能力转移到单视图遥感图像的高程估计任务中。该模型在多个基准数据集上取得了卓越的性能，证明了其在不同尺度和场景下的适用性和泛化能力。结果可为地理信息科学的诸多应用提供了更准确、更可靠的高程数据支持。",
    img: "/images/research/D2Ehr.png", 
    date: "Updated Sep 05 2025",
    articleId: 'Depth2Elevation',
    link: "https://mp.weixin.qq.com/s/JEKPHoqYUTONDszWnLk1uQ",
    topic: "Built-environment and Urban System Understanding",
    year: "2025"
  },
  {
    id: 1, 
    title: "gdverse：一个集成的空间分层异质性建模工具",
    desc: "我们开发了一个专注于空间分层异质性建模的R包gdverse(Lv et al. 2025),通过设计一套统一的API接口和高效的算法实现，以期推动这些空间分层异质性模型的应用",
    img: "/images/research/gdverse.png", 
    date: "Updated Sep 05 2025",
    topic: "Spatio-temporal (4D) Data Fusion",
    year: "2025"
  }
];