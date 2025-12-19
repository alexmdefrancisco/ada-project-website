---
layout: story
title: "Big Short: Are Investors Blind to Crisis Signals?"
---

<div class="hero">
  <div data-aos="fade-up" data-aos-duration="1000">
    <h1>Big Short: Are Investors Blind to Crisis Signals?</h1>
    <p>
      Our goal isn't to turn you into professional traders overnight—we just want to give you the intuition needed to follow the story without feeling like you've stumbled into a secret Wall Street meeting. Think of this as Ryan Gosling in <em>The Big Short</em> giving you a friendly tour of the finance world, but without the sunglasses or the existential dread.
    </p>
    <br>
    <p>
      We investigate whether investors overlook early crisis signals embedded in market-wide data. Focusing on U.S. stocks and ETFs, we examine three benchmark episodes: Black Monday (1987), the Dot-Com Bust (2000), and the Global Financial Crisis (2008).
    </p>
  </div>
</div>

<hr>

<div class="container" data-aos="fade-up">
  <h2>Glossary</h2>
  <p style="text-align: center; max-width: 600px; margin: 0 auto 2rem;">
    Before we dive in, let's equip you with the essentials.
  </p>

  <div class="glossary-grid">
    <div class="glossary-card" data-aos="fade-up" data-aos-delay="100">
      <h3>Financial Markets</h3>
      <p>Imagine a supermarket, but instead of apples, people buy and sell tiny pieces of companies (Stocks) or baskets of them (ETFs).</p>
    </div>
    <div class="glossary-card" data-aos="fade-up" data-aos-delay="150">
      <h3>Stock vs. Share</h3>
      <p>A <strong>Stock</strong> is the 'pizza' (ownership in a company). A <strong>Share</strong> is a single slice of that pizza.</p>
    </div>
    <div class="glossary-card" data-aos="fade-up" data-aos-delay="200">
      <h3>ETF</h3>
      <p>The entire buffet tray. A single product holding hundreds of stocks. Safer, smoother, less dramatic.</p>
    </div>
    <div class="glossary-card" data-aos="fade-up" data-aos-delay="250">
      <h3>Market Breadth</h3>
      <p>The percentage of stocks moving in the same direction. If most rise together, the rally is robust.</p>
    </div>
    <div class="glossary-card" data-aos="fade-up" data-aos-delay="300">
      <h3>Returns</h3>
      <p>How much a price changed. We use <strong>Log Returns</strong> because they behave better mathematically.</p>
    </div>
    <div class="glossary-card" data-aos="fade-up" data-aos-delay="350">
      <h3>Drawdown</h3>
      <p>The pain metric. How far the market has fallen from its previous peak.</p>
    </div>
    <div class="glossary-card" data-aos="fade-up" data-aos-delay="400">
      <h3>Autocorrelation</h3>
      <p>Market memory. How similar is today's behavior to yesterday's?</p>
    </div>
  </div>
</div>

<hr>

<div class="container" data-aos="fade-up">
  <h2>Data Story</h2>
  <p>
    Before we jump into the charts and heatmaps, let us give you a quick roadmap of how this data story unfolds. Think of it as the trailer before the movie — no spoilers, just enough to get you hooked. We begin with a light Introductory General Analysis to get familiar with the dataset and understand the basic behaviour of stocks and ETFs. From there, we widen the lens in the Cross-Sectional Market-Oriented Analysis, where we explore how the market behaves as a whole — autocorrelation, seasonality, broad signals, the kind of stuff that tells us whether the market is chilled out or having a midlife crisis. Then we shift gears into the Industry-Oriented Analysis, because not all sectors move together, and some tend to sense trouble earlier than others. Finally, we arrive at the centrepiece of this project: the Crisis-Oriented Analysis, where we tackle our research questions head-on and search for hints of stress in the years leading up to major financial crashes. All wrapped up with a conclusion and a quick meet-the-team moment.
  </p>
</div>

<div class="container">
  <div data-aos="fade-up">
    <h3>Introductory General Analysis</h3>
    <p>
      We begin with the raw material. Unlike crypto, stocks trade only on business days (~252/year). We check for gaps to ensure data quality.
    </p>
  </div>

  <div class="chart-container" data-aos="zoom-in">
    <img src="assets/images/eda_calendar_heatmap_stock_etfs.png" alt="Trading Days per Month">
    <div class="caption">Trading Days per Month. Note the gaps in Sept 2001 due to 9/11.</div>
  </div>

  <div data-aos="fade-up">
    <p>
      Price charts are like character introductions. We meet the main characters: Apple, Amazon, Microsoft...
    </p>
  </div>

  <div class="chart-container" data-aos="zoom-in">
    <img src="assets/images/compare_stock_etf_evolution.png" alt="Evolution of Major US Stocks vs ETFs">
    <div class="caption">Evolution of Major US Stocks vs ETFs. Note the difference in volatility.</div>
  </div>

  <div data-aos="fade-up">
    <p>
      Prices wander, but <strong>Returns</strong> tell the story. We observe <strong>Volatility Clustering</strong>: markets have moods. Calm periods cluster together, as do stormy ones.
    </p>
  </div>

  <div class="chart-container" data-aos="zoom-in">
    <img src="assets/images/eda_AAPL_log_returns.png" alt="Simple vs Log Returns for AAPL">
    <div class="caption">Simple vs Log Returns for AAPL. Volatility clusters are clearly visible.</div>
  </div>

  <div data-aos="fade-up">
    <p>
      Are returns Normal? We check with a QQ Plot. Log returns align closer to the theoretical normal distribution.
    </p>
  </div>

  <div class="chart-container" data-aos="zoom-in">
    <img src="assets/images/eda_market_qqplot.png" alt="Normality Investigation: QQ Plots">
    <div class="caption">Normality Investigation: QQ Plots.</div>
  </div>
</div>

<hr>

<div class="container">
  <div data-aos="fade-up">
    <h2>Market Analysis</h2>
    <p>
      Zooming out to the aggregate market. We built a 'Market' index by averaging all stocks.
    </p>
    <p>
      Autocorrelation reveals that while returns have short memory, <strong>Volatility</strong> (absolute returns) has a long memory. The market remembers fear.
    </p>
  </div>

  <div class="chart-container" data-aos="zoom-in">
    <img src="assets/images/eda_market_acf_plots.png" alt="Autocorrelation of Returns vs. Volatility">
    <div class="caption">Autocorrelation of Returns vs. Volatility.</div>
  </div>

  <div data-aos="fade-up">
    <p>
      <strong>Market Breadth</strong>: Are we moving as a team?
    </p>
  </div>

  <div class="chart-container" data-aos="zoom-in">
    <img src="assets/images/eda_market_breadth.png" alt="Cross-Sectional Market Breadth">
    <div class="caption">Cross-Sectional Market Breadth.</div>
  </div>

  <div data-aos="fade-up">
    <p>
      Investing carries risk. The <strong>Drawdown</strong> chart shows the historic crashes we aim to predict.
    </p>
  </div>

  <div class="chart-container" data-aos="zoom-in">
    <iframe src="assets/charts/eda_stock_market_drawdown.html" class="plotly-chart"></iframe>
    <div class="caption">Cumulative Return and Drawdown.</div>
  </div>

  <div data-aos="fade-up">
    <p>
      <strong>Seasonality</strong>: Markets have routines. We check for Day-of-Week and Month-of-Year patterns.
    </p>
  </div>

  <div class="side-by-side">
    <div class="chart-container" data-aos="fade-up" data-aos-delay="100">
      <img src="assets/images/eda_stock_seasonality.png" alt="Seasonality in Stock Market Returns">
      <div class="caption">Seasonality in Stock Market Returns.</div>
    </div>
    <div class="chart-container" data-aos="fade-up" data-aos-delay="200">
      <img src="assets/images/eda_stock_tom_effect.png" alt="Turn-of-Month Effect">
      <div class="caption">Turn-of-Month Effect: Returns tend to be higher around month-end.</div>
    </div>
  </div>
</div>

<hr>

<div class="container" id="industry-analysis">
  <div data-aos="fade-up">
    <h2>Industry-Oriented Analysis</h2>
    <p>
      After examining individual stocks, ETFs, and their aggregated market behaviour, there is one more perspective we need before diving into crises: industries. Financial markets are not a single homogeneous block — different sectors respond differently to economic shocks, liquidity cycles, and macro uncertainty. Some move early, some react late, and understanding these dynamics gives us a sharper lens for identifying pre-crisis patterns.
    </p>
    <p>
      To perform industry-level analysis, we first assign each stock in our dataset to an industry category (actually, we've already done this in the previous sections). This is done using an external mapping: a classification file that links each ticker to its corresponding sector. Once merged, our dataframe gains a new column, industry, which allows us to group stocks not only by date or asset type but by their economic function. For the sake of simplicity and understanding, we have decided to focus our industry-oriented analysis on stock market only.
    </p>
  </div>

  <div data-aos="fade-up">
    <h3>Distribution of Log Returns</h3>
    <p>
      A natural first question is: how do log returns (i.e., one of the main players so far) differ across industries? Some sectors are known to be inherently more volatile (like technology), while others are more stable (like utilities). A distributional comparison helps reveal which industries carry larger day-to-day movements and which tend to fluctuate less dramatically.
    </p>
  </div>
  <div class="chart-container" data-aos="fade-up">
    <img src="assets/images/eda_log_return_histogram.png" alt="Distribution of Log Returns by Sector" style="width:100%;">
    <p class="caption">Distribution of Log Returns by Sector.</p>
  </div>

  <div data-aos="fade-up">
    <h3>Distribution of Volume</h3>
    <p>
      We then extend the same investigation to trading volumes, which vary significantly across industries. Certain sectors attract persistent attention and heavy trading, while others are active only around specific events or cycles. Understanding volume behaviour helps identify which parts of the market drive liquidity and which remain relatively quiet.
    </p>
  </div>
  <div class="chart-container" data-aos="fade-up">
    <img src="assets/images/eda_volume_histogram.png" alt="Distribution of Volume by Sector" style="width:100%;">
    <p class="caption">Distribution of Volume by Sector.</p>
  </div>

  <div data-aos="fade-up">
    <h3>Risk Profiles (Boxplots)</h3>
    <p>
      Histograms are a helpful first step, but they don't show medians, outliers, or intra-industry dispersion. To uncover these details, we turn to boxplots of returns and volumes. These visualizations help us compare industry risk profiles, identify asymmetric behaviour, and observe the presence of extreme events.
    </p>
  </div>
  <div class="chart-container" data-aos="fade-up">
    <img src="assets/images/eda_industry_boxplots.png" alt="Distributions of Log Returns and Volume by Industry" style="width:100%;">
    <p class="caption">Distributions of Log Returns and Volume by Industry (boxplots).</p>
  </div>

  <div data-aos="fade-up">
    <h3>Industry Correlations</h3>
    <p>
      Finally, industries rarely move in isolation. When uncertainty rises, sectors often become more correlated; when conditions stabilize, they decouple. Looking at correlation matrices gives us insight into how industries interact under normal conditions and provides intuition for what may happen as we approach a crisis.
    </p>
  </div>
  <div class="chart-container" data-aos="fade-up">
    <img src="assets/images/analysis_corr_industry.png" alt="Correlation of LogReturn across industries" style="width:100%;">
    <p class="caption">Correlation of LogReturn across industries.</p>
  </div>
</div>

<hr>

<div class="container">
  <div data-aos="fade-up">
    <h2>Crisis Analysis: The Core</h2>
    <p>
      We focus on 3 periods: <strong>Black Monday (1987)</strong>, <strong>Dot-Com Bubble (2000)</strong>, and the <strong>Global Financial Crisis (2008)</strong>.
    </p>
  </div>

  <div data-aos="fade-up">
    <h3>1. Do common early-warning patterns exist?</h3>
    <p>
      We want to see whether correlations, volatility, and market breadth display systematic behavior as markets approach instability. We compare correlations in the 2 years BEFORE a crisis vs. DURING the crisis. Correlations often tighten <em>during</em> the crash, but we look for the buildup <em>before</em>.
    </p>
    <h4>Focus on Stock Market</h4>
  </div>

  <div class="side-by-side">
    <div class="chart-container" data-aos="flip-left">
      <img src="assets/images/analysis_corr_black_monday_rets_pre.png" alt="Correlations Pre-Black Monday">
      <div class="caption">Correlations Pre-Black Monday</div>
    </div>
    <div class="chart-container" data-aos="flip-right">
      <img src="assets/images/analysis_corr_black_monday_rets_during.png" alt="Correlations During Black Monday">
      <div class="caption">Correlations During Black Monday</div>
    </div>
  </div>
  
  <div class="side-by-side">
    <div class="chart-container" data-aos="flip-left">
      <img src="assets/images/analysis_corr_gfc_rets_pre.png" alt="Correlations Pre-GFC">
      <div class="caption">Correlations Pre-GFC</div>
    </div>
    <div class="chart-container" data-aos="flip-right">
      <img src="assets/images/analysis_corr_gfc_rets_during.png" alt="Correlations During GFC">
      <div class="caption">Correlations During GFC</div>
    </div>
  </div>

  <div data-aos="fade-up">
    <h4>Dot-Com Bubble Burst (2000) - Focus on ETF Market</h4>
    <p>
      The late 1990s were defined by intense speculation surrounding internet and technology companies. Stock prices soared despite many firms having questionable business models and minimal revenue—optimism was so high that some companies doubled in valuation just by adding ".com" to their names. On March 10, 2000, the bubble burst, triggering a prolonged collapse in tech valuations and a nearly 80% decline in the NASDAQ. Because this crisis was heavily sector-concentrated, it offers a natural laboratory for analysing industry-specific early-warning behaviour [cite: 1010-1013].
    </p>
  </div>

  <div class="chart-container wide-chart" data-aos="zoom-in">
    <iframe src="assets/charts/interactive_correlation_dotcom_burst_etfs.html" class="plotly-chart"></iframe>
    <div class="caption">Correlation of ETF Log Returns, Volatility, and Volumes during the Dot-Com Bubble.</div>
  </div>

  <div data-aos="fade-up">
    <h4>Global Financial Crisis (2008) - Focus on ETF Market</h4>
    <p>
      The 2008 crisis began with stresses in the U.S. mortgage market before expanding into a global financial meltdown. When Lehman Brothers filed for bankruptcy on September 15, 2008—the largest in U.S. history—panic rippled across markets. Excessive leverage, correlated defaults, and opaque derivatives created a deeply interconnected system that unravelled rapidly. Importantly, many studies suggest that structural tensions were already rising well before the crash—making 2008 the quintessential case for searching for pre-crisis signals [cite: 1017-1020].
    </p>
  </div>

  <div class="chart-container wide-chart" data-aos="zoom-in">
    <iframe src="assets/charts/interactive_correlation_financial_crisis_etfs.html" class="plotly-chart"></iframe>
    <div class="caption">Correlation of ETF Log Returns, Volatility, and Volumes during the Global Financial Crisis.</div>
  </div>

  <div data-aos="fade-up">
    <h3>2. Do industries exhibit distinct pre-crisis behaviours?</h3>
    <p>
      Some crises hit specific sectors first (e.g., tech in 2000, financials in 2008). We test whether sector-level signals emerge earlier or differ from the aggregate market.
    </p>
    <h4>Black Monday (1987) - Industry Analysis</h4>
    <p>
      Black Monday marks one of the most dramatic single-day collapses ever recorded: on October 19, 1987, the Dow Jones fell 22.6% in a single trading session—a number that would cause even seasoned traders to spill their coffee. The event remains puzzling because it seemed to come "out of thin air," with explanations ranging from automated trading mechanisms to liquidity shortages and inflation fears. Its suddenness makes it a perfect candidate for asking whether subtle warning signs existed beforehand [cite: 1004-1006].
    </p>
  </div>

  <div class="chart-container wide-chart" data-aos="zoom-in">
    <iframe src="assets/charts/interactive_correlation_black_monday_industries.html" class="plotly-chart" style="height: 750px;"></iframe>
    <div class="caption">Industry Correlations: Black Monday.</div>
  </div>

  <div data-aos="fade-up">
    <h4>Dot-Com Bubble Burst (2000) - Industry Analysis</h4>
  </div>

  <div class="chart-container wide-chart" data-aos="zoom-in">
    <iframe src="assets/charts/interactive_correlation_dotcom_burst_industries.html" class="plotly-chart" style="height: 750px;"></iframe>
    <div class="caption">Industry Correlations: Dot-Com Bubble Burst.</div>
  </div>

  <div data-aos="fade-up">
    <h4>Global Financial Crisis (2008) - Industry Analysis</h4>
  </div>

  <div class="chart-container wide-chart" data-aos="zoom-in">
    <iframe src="assets/charts/interactive_correlation_gfc_industries.html" class="plotly-chart" style="height: 750px;"></iframe>
    <div class="caption">Industry Correlations: Global Financial Crisis.</div>
  </div>

  <div data-aos="fade-up">
    <h3>3. Systemic Risk (PCA)</h3>
    <p>
      Principal Component Analysis (PCA) measures how much the market moves in lockstep. A high Explained Variance Ratio for PC1 indicates high systemic risk.
    </p>
  </div>

  <div class="glossary-grid"> <div class="chart-container" data-aos="zoom-in" data-aos-delay="100">
        <img src="assets/images/analysis_pca_black_monday.png" alt="PCA Black Monday">
        <div class="caption">PCA Black Monday</div>
      </div>
      <div class="chart-container" data-aos="zoom-in" data-aos-delay="200">
        <img src="assets/images/analysis_pca_dotcom_burst.png" alt="PCA Dot-Com">
        <div class="caption">PCA Dot-Com Bubble</div>
      </div>
      <div class="chart-container" data-aos="zoom-in" data-aos-delay="300">
        <img src="assets/images/analysis_pca_gfc.png" alt="PCA GFC">
        <div class="caption">PCA Global Financial Crisis</div>
      </div>
  </div>

  <div data-aos="fade-up">
    <h3>4. Predictability via Breadth</h3>
    <p>
      Does market breadth predict next-day returns? We run regressions to see if the slope is significant before a crash.
    </p>
  </div>

  <div class="glossary-grid">
      <div class="chart-container" data-aos="fade-up" data-aos-delay="100">
        <img src="assets/images/analysis_regression_black_monday.png" alt="Regression Black Monday">
        <div class="caption">Regression Black Monday</div>
      </div>
      <div class="chart-container" data-aos="fade-up" data-aos-delay="200">
        <img src="assets/images/analysis_regression_dotcom_burst.png" alt="Regression Dot-Com">
        <div class="caption">Regression Dot-Com Bubble</div>
      </div>
      <div class="chart-container" data-aos="fade-up" data-aos-delay="300">
        <img src="assets/images/analysis_regression_gfc.png" alt="Regression GFC">
        <div class="caption">Regression Global Financial Crisis</div>
      </div>
  </div>

</div>

<hr>

<div class="container" data-aos="fade-up">
  <h2>Conclusion</h2>
  <p>
    Financial crises do not always come out of nowhere. Our analysis suggests that rising correlations and systemic risk (PCA) often precede the crash. However, simple linear predictability (Breadth) is not a silver bullet. The market whispers, but it speaks a complex language.
  </p>
</div>

<hr>

<div class="container" style="text-align: center; margin-bottom: 4rem;" data-aos="fade-up">
  <h3>The Team</h3>
  <p> Nicolò Baldovin, Demetrio F. Cardile, Alex Martinez, Tommaso Mencattini, Letizia Seveso.</p>
</div>