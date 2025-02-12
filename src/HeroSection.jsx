import React from "react";

const HeroSection = () => {
  return (
    <div style={styles.heroContainer}>
      
      <nav style={styles.navbar}>
        <div style={styles.logo}>accredian</div>
        <div style={styles.navLinks}>
          <a href="#" style={styles.link}>Refer</a>
          <a href="#" style={styles.link}>Benefits</a>
          <a href="#" style={styles.link}>FAQs</a>
          <a href="#" style={styles.link}>Support</a>
          <button style={styles.loginButton}>Login</button>
          <button style={styles.tryFreeButton}>Try for free</button>
        </div>
      </nav>

       <div style={styles.heroContent}>
        <div style={styles.textContainer}>
          <h1 style={styles.title}>Let’s Learn & Earn</h1>
          <p style={styles.subtitle}>Get a chance to win up to <span style={styles.amount}>Rs. 15,000</span></p>
          <button style={styles.referButton}>Refer Now</button>
        </div>
        
         <div style={styles.imageContainer}>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQ4AAACUCAMAAABV5TcGAAABI1BMVEX///85tP8dgPX6w58zsv/1+//7/v/8/PxFuP8ssP+M3v+b1v+Hzv8bfvRBtv/r9//T7f/A5v90yP/09vak2v/c8f/89vP7zq9ev//K6f/1xBzk9P9sxf9Qu/+x4P8snPonk/h+1/9oy/+N0/8kjvchiPYAdOj6sZPQ4vq91fhenO45iev88dGNtfItoft10v/77sRzp/BIkOylx/X43Ir1yDT20l2m5P344Jb99uCYvPMsqP3949Povaf72sb/r4n77eT66LL2zk/31Wz42n1ksvpaqvm56/755KUAePV4vv2kt9PcxryZyO6OsNl0od/HsbS50+HNwb+Hnc+pqMXc086Wo8euq73RtKxyltu8prferaFkjt/NpKT/xpazuL11tuQXFtuhAAAV6ElEQVR4nO2dCWPTSLKALad1RbIupERGh5PIhiQmDkkIkBgYYIZjd3bf8l4YBnZYdv7/r3hV3a1bDk6IIzOhZgAfkqz+VF1VXdVSdzo/5CaKBCKimGYQiFLbp3PdQhtvYtuDwLP6fduOXS3RdScEcVxLbPsEmciLOayUXvjA442H1mu09b4fRYohCIQQVYW/CLwSfDdYzInMJfItufLimyS/9HnjXbz4juNg8xXFMAiVFIBQESLo7fGQb93iGLIXFxPs+Nh81vqYXnrQfHbx4eobhiHQ68+EtreGoCJ6awYkwyHPjQPbzy4+9nq48njpQ956qv1GfqX5v18DUJH+Qtt8nsiyXHnRIACANj+ONej2vNdHVPMVI20xu/Tkwm2vC3HMa2r914X1/oC2Hi79/hbt8nCOKgpvtUAK1/7qRd04XQYgkmlrjuP7cNl58ymCK7jgF5TJnd3ttmF0RNsx1NzltSju0bh1HqYbtQshE8PuHI332u0vkmssCQ1BsTvi6XinFX8L8Rf1KZayJDAEothyZ/twr5VwXeYBR6K2jSEVovRl2TzY9VrEYUZtU8iEKJYsS6eH7RhThqPfNoRcAEdHlo7GO63gYGIvi+XIcBz+wMEk8jqy2FZnYWItMOi+qCwBDm/ZcOy1GpcGSxN2CIIfII5Dq0Ucpt82hFx8k2pHK3EHF8lfHu0IYbjSMo6OszRRqRCKcus49KXBQRBHW0F6Kks0ZnEYjjYrDB13iXBIcifYPWg14REvDw59CXDYP3AUpb88OJKO3PF2D1qt1npLE3dQHG1lw1IxlyZKJ9oS4BCjBhxZcZWoaZntPBFmvpt14EYc7jLgaIjSCfF1Lg4f04R6Jk6Uf41vieEU3hn5l6EPNMtHNugXfiOPpdAOyWk4NcU1JSZiYIfQJsPu8A+kTuCouihlbz3Ft/IvLV/V0jeiaYfl/AFhO9qNCVquHafLh8NwC+cUOIQodvE94MjfeoZfGJIDDrdw9EAv8iBCzI+wvDiaovQSjo7pq5fFUW45CVlMIblG/TcFEiOO8VG7OJqidIbDtG02ZcvlOEwPBXoPxSF67K1AcUgBvgniiOKQzH6f7ivFSt5e4vIKm9eUVqA4dsZHrU6bk+KGC8Vw2IoS2nhyFjEoDtfHeW2+wnB4dJYb2EuKQ9TYlwLDYfuRT3tGP88vEQUHq3hAUW/CYTMc7U6as2fiiFWV6KjensBw6HyyB8NhGfwtwxGmM0Eojhi+ZFtlOAg9mGThEW2jwZ8xHO3UaDPpN5xZjkOjTeLa0dc0zdUUjiNImJ/lOGwN5wgpKQ5hqibYsH7WL4iAqiYmOOfJbHLv/WXA0VSzZjg8TbNLtoO6Ty/kOOhcSSlQGQ72peVzHJamxagGoCZpa9UQMxmeQk2t2xB6WIDjqG0cXkNYWvYsXlT0LEGKg3+Z4qBiRQxH/nWYH5UeVFOpe6ln8Mly4IDmnYsD1SGNO2gUVsZhFrWjk2pHKl7uZ4mPvUR0DPpv3b8TwaM4WimzrGWvzJk4RNroAOM0hsOKcQapz3GIVh8kTnHg7NJYiwSGQxSZBylE6dQq4040+OjX6l1K0BqO+w9O0pdmg9NjOPp0IrCoEYFrR8IuY+pZfCOKIiM1pQ6fW8hsR1+jTrVgIpS41AvE6lUgiGOB8xnQ1M3oh/df3n744uRrOGJVoxtknSVRDPhPETiOiE+v4zjgGxAh9SzUJ5n5ECCsZMjdamdRTMSxIO0QvTdvHr15YwUNUc29l7dv3z7+5R7bMJmNI2LdwCBpZ7FBYifFwXZkOKR+HGN/8TkOJaImop9uxANdGsgGeJWqkSmJxIVVrEXrzSqTR29qdYv7D29T+Znqh6jVaKQ4WOCEZi91tPi/qDXhoGZWkkDXOA62r6kZfCNKh4aufhKwy1DmEYkylmgXUGaR+qsFeVPuMvc4jYcvqD1titIzHAoNtL3IKAzhZuBgAr0jxcH3ZTaCODRyo/1LjWjoX41M/UXh4DT24UpsbSKPYoc5+ZnCOH7LnYtkKw046PnCqTu0CBQrhenzEuCg2t6EQ2TaAeMdrKqxfUk2tI+ZO2FDOdEpJ4cWhUOyAMHmPk3sgRsEII/yZP0J1Y3jF/nWdi0OI4KORoI6EvoqDjU7F4c4+I+b4ojc/Ls4JHQP3cAxCrzox6geoCr4aZjuQd+VbTjx5cUU4TykkY6coIOChuQ87lHleFvYvF8PSwlhwzGBz9En+VR1NkxTs++zrctfspxp+io7YmmHcs6U+J2F4BAfAY0Q2jGdTlX6436Rx8kvqB2Ps7gDI8lab8kTvE3Z4eL3hW2yO3nKL0i+TXWH4k+qzmK0A7vKlqEOhqPRaGNCY2HgkdmPtQfUduQ8ajiqefJqc8vAZm1dOVppyxp+iqOziCIcKsd+NB12eyDd7nCCtgB49Ll/uU+Djsf3sjDdq2ZLqw0svM46SIaDzNy6crDKlteFAy3HljpEFCi90QBPKlx9xEw2OpaXj+8V7nGqhqUk1IqiG6qfvUl0X2FX2qHvoU9GxY1dR1DZB3rqr9jRQAP9JD9KqNSAqPoCcEgWOJJNZaObSa87QP3YYuZj7fHth29P1oq7mHpFOTR2vy8Tqe+rSf6B6cWsWBDT26MSuKhicWtbUR0TXwV8DGO49K2uCnpQOIqdVA24yku0V4nDdP196CuTbq/KQ9lfxfDg3oO3J5V9qmEp0UpfA47SB5KnGzSTh681wFEK8uxIdUS+H7tVjKWLEUepoWK/opQcx1VWnSxHMEA7wo0CDeQxYd0FfmntpHYroKgZ5+KIyjhY4YXhEBFH6fxzHFJs0PiLpU5qOODSlVMe6lVXrMU4gq4MfeV1t4QD7McUtHZ/1W7ezZ0TB45K2Ed+UTtm4IChzvk4Kr1UvdoSrWRh0AtKsLo/KNMAHhuEetvGnzK1cqKO4zD7TFyF4ZAsLdEsCsR0hKp2pFtrRs7HBAY1HCJsZJmMK+bZqjiuqAhnxj69uXEL/MqwhmM0weh0tWE8IFpupYLMcWQjO8JxuBBLshG/lNRwZAP5orrQQV4FhwUeR9GZ1xfdwnBJZUW4K8EhWbrCQmqwpOGoiqPbG6qp9ahSDKsFwhRHFomnONAW0JGYpNVsR19R04ii0HtiQa3hoI8i8NmQ0ArrOK4gcyzGfIhCCFjSqFvHAdYUrUclAjZtvV5W4DhsXmQTOA7RFVSVjWzFunZ4GhZdkrCMQ0zqOOgAV2V3VBcq2kS1WYn2m3GAaqQzBCgO0uM8et1eFo1tgHr45dSH1NfrY/sMhxhQAX3m2gF8nJgZCqdmSukTCkzTFTgOyWR557DqaNOyDsdpXDkOsBqFAQLgUHsF6TIg1LkIxZG+5GnN98GVPYsdcRwdbLDIP5vhaCU3TfRINk3xgBNq0g6B59uLpXxWhBvNjWPGwwO8RBHKOKJBJhNiTLglGYAR2M+NaeD6M25lKeGQchz5LzpCrbPkOPgHMUsVi27cjCO1R7ntsFhNcl4a9UdLSHC54lKrKI68Zq6An1l9RfWjN5wWeosEFnTWFLlZ2pH+qIWlpOa4I9cOsKKs+abX2FlIXMWBRThpZzQnDnzSxq3iWYlW/Gh10ym3iuHI+iNmwlZXJ720tyh8nA8tmj2dlOMIbIwj7MRIcUis3UGoCnXtMF0Uzcm1wxDcgt5XcBDmsWH/vKBNcVxGO8BuWW4Y7a9uRZVWsc6S/UTIcqbYXWDkAj5znxoP0YYxpe/TZ7A0pH5SR5ueZ2pKddYE6nAbHC1Pd/EPbEMtJlir2sEql4W5QUQIZLxtdO66ArcdEgwHNV9Qoa1btcYQdaugHcIWS6VPe9y3CI6bGg8YVfZtV9Md9pyOJhxZYMUdLe8Gpo7Ji1oYpgrsbDIcoJy5Xy/jiDTmjopz5pQL4mCNsOKEJgsIKEc9q9eMI0THi5GYELpWuTRoBlbfLvvbinYIhTCMDXpwQk8t7kj47Eklw0GEQmk7w4GzQvg8CRjEFX5VMeWvFuEq3sSL9VBhD9kAu7DZMDMD+0ce6rHOsrqPUTsYD4P4Wr/BkcWlA1W0o4CDzUWgsXUVBws7TNMKCzgEI6vLZjikzF2DPS/kPCgO8Xwccvk5VlaYXUZCws16X0FKMGbJEnM+w7G50eOBaZTYDWOC8jzP2TjyiZAzB/hBCYfgp+ajaURbSuGTiOI4tyZZdq5iIcLHAdlWDYZAB/hbmSmNNhmOQY9ngQy9CUd/ThxZhck2Zg3wKzh42aoJR0k38NLRqtP52lHEIcVFmEYjDkNQ9lf387dbOY5uDwIxQ48bkm/lXPoMHOg6BZKwxidqjqN0KDPk6bG05JjtUMYB0UslROBFuLltR2leShMOPN3pxHGTzBTwwGNr1ONJD8NpwuGV5loQ3ULJU4Yq/aCfGDjRI6Zf2oJGP4MhWNi3CmL7MFqlu/MAS6EbWg4RHDvdCFwaBD6VhDXFcTB/TdIqqnQdB1Gnk43hqPfa1fI4jKlH1MtyQE7cUNYJwtKBBDpRozCaYDM3mPYrTAT+D+FbZwJD2nxrtHH5ztk2RkNhAW8MvBCOUqUdbcd+ZkrV6XSwMerS0sogcZ3814ytzc390VdwmOVKS70SUq+bnFNoqZTosp3PrzrhbaPyBYpwgVM+wRAcLVcKRMHHrxBeOK5ezOi8mvLk2Dk4miYBX7NQ7bgAjjeVyVTh6qaBJIajPKtB5RX2lvRaTgejPOVRxnGSFeKkpOH8rllUvG3U3N2ds8wiPirjALOwNRmNaI6nlP3qTaC38G5EJsPsux43pUFHpmWntccvH9xnNRepYQLQdYuqS6Adc1edzBwHjDHBVGxMlUFZLdK0KPQWDOMNYbIxyjeg1RaK4+Txgxf3T2h18hc2Ya7xhorrFcTRmR9HsIo4DEMRoIdgB4ER6rTGgjYbegu4CkXd6PZKxTjAoSToaF8cH798+PMxnffy8O09DClaNx5qwu6inTORbj5yAAbYgmGXtrKHI9RaBYGph+4mkTDpllWHjll4kH7/+HYuxy86DfOhrluIhjjmrjqZj7agh1Cr2cuaN6nnzJl6uPqg2o/oAN93WZDOeBzzWWJLgcMFHN4cOFhkKibCiPvSVAZEbVaPDd3VolqxZYCOxeUjWpzl8fLFAwTy8l42CXAJcHwtc8zHLVJSaXsP1WPQqB4jUI9kUusrOHkty3fcf3j755OTx8d0emnTfKhrFjWWaNXpq8rBh3GxMqhpAcmntVTVw3U2yl9hoUXR8rDj/sPHa521t8e3H6zBcKhtGgKZE0c6jPP8aUX/wVcYEHLWgfS6rzXX9QteliuH4xbG9yfUx754+WIZ4jDC75P8Og4ucMpVSwFtVKbDURqh52B6w9B1NSP3tOiWIXLT3NpTqGQaivXbfxIjL8LNiwNOeVLrFsOpgGOWg72D3fEoH7h0ewOwpknGA2hgZtdxG4b3zFBrM2pQ1yVE4PdJzo1D1BocyXCiQqjpiaa3vX10dHowGY/+BtLrvcYpacpkSAGNJjjQjDTNnmW4A716u/w14zD68sVwdMStadWRQFOHJM7sgYSz0HaOTl8fDhmPiI53JyxTkWjnLGQQOO3ywGe3ShfC0RH1QtyF4dgIlMMIm9KfHdHru2BPnYhlcgjxNVc7N7dihwYxCkkfOhNUuKaHYxOGY4hFuLnXfRD7e0NWlQcqo+FgKkS+rjWlMDo4XwF5JGFkCIYSOYmrxefHOObeQI9hj0TXQ4evFpBlxQrpHGEBdob4nsxrkvMvdACnfHRIzeNwYzAlRhTq0OJKKSmHZyEPrLQ5uJnWlCYt8dsZw4BSYguJeFa+jkiSrSWBCwqwtUSELK11JWyIbsr8UbZyuRh9vojbpweDwUQFT6EwGK7b2FuwfZ7tsi0Ahmt/dexs7o32UNNkLtkaO3SdFcuq4sGVNhAHLjNCp01dvmMpEIWlT/a92CIpoqnhr4Jm0GZqSRKvPX/efATRwtPH2dHxPOvjBHujg536dikd+MPx4FIk2VokdCGW0jI0WUaUZU7nwKEHcPz0QccXXCKlD07TAT+R6H9/9Xpy8Os/1lfWnzRvKomBhTfZeOZcs2rMo/F4d+/oaGdnZ3t7OzBNUWQ3wJXppIzw75QPLlZCF6zg69QAn8z0cKssNC1UQ792LDzaJe+TDMIwgV/95//863O39/ndCsr62qytz7mBtGHj7dPdMcoI/hzu7h4cHJyeIp7tbcsLkI9Ug1NQHrnDV7Cia9kw9Skv40PT3YW7GCgo3aL7fq3qNEts0P7//b+nT59+PBu9/0JxrDy5onvXJXN7e2fnCGI6CHV3dw+BzGh05053NBofHiKePY5n26N0KrvLRcHDydkyTykettQNM8xY1QnjgG3sHV7uGWqe5v7GIKx8+D3F8e0kqsKbYUHTdyie15TOHSYpnxQP6E4VjtwonZL3wqfA8I+PuheJwgrn2f8Hp7Hy7uzpysrTj3dnd5YrFbakEVWfvVcHVHm6GZ4R7V57wGeH6w69qUNK+1cTmfRTeLE9nresUBF5PaWx8vvoX+/PPn1YWV9/sqA1zc4XCW0ExfP3Pexdh4c4lrwD/3XB/Awy7aHGJ0XECLHzzXrV9viyN5w/SWE8fXfYG3368HF9Qd3lYsKXw0Lbg50LehflczhmckhN894eeC7uusA4B0yFTAt82iUf3bHGlePp72fj3vjD05Uvi7Ie3yISj0+2txmfUwCxt7tLAR2O8S/muaBznZ4eHI53ty/pDLhyfDwbQ8D+ib7+8mXpcJQl9y+cD1Ufrj8Q7BwcXfqO0WeMxic6ejlD1fgCxnTl+RWe/eKlEN/SiE+67AqGvK/8e0zzXp8/fgE9Ofz0x7Pna60Y06uSfCR73mJ1deE4/sNwdD+fffr04fePGJnOGLl8H1JcyvAi7XjOTMcfn1ketDd+v86N6bPrCT6uUgoNTzvLRRIenQzH3TOeTv+QBSHXFItdoZTsRbYK6q2L9BbuWH56z2bAdc8yHN+bdsjNinAh2yE94ziY8UBjClH6uw9nf3xnvqVzwczXjEOkOP7gOCAsPdv9vHv2cf3Jd6YdV7E8MHcsd+/e/Zyl1ccfPn58ir3le3Ytl5N0wHL3p7O02PK3s+/UeHy7pAMWwPFvfi/kaPgrT3rcOO1Ye7aS4fgPFl2GgykRwv/+9t9f//zzt5umHHI2tmfGYzjha0jjfGhlZgn2LyprOQ3EcTYs3QvntLloVgtS0A3E8dP7aTk7f7OUo0QDteOP7OlgghKeU57/S0qZBuXx7k8s7vihrtnBzVKNGo2Vuyvr67/RR8p65qXqE9+z1GisPHu+9n0nfL5B6jS+vwHK1Yn8rAJj/Xnbp9SirP2gUZAajeUuIixYntdp3FQTCvJ8/QeNXOo0btwwPhe5gcbN9bDykxqN7696cGVSD75usoutBV832sXWw42ZEyb/+tJgRG+wGW0wojfYjDYY0RtsRteaaNxYM7r2ZL1BbmxsLq81yU2l8UO4/D/meWoPu6YGvAAAAABJRU5ErkJggg==" alt="Refer & Earn" style={styles.image} />
        </div>
      </div>
    </div>
  );
};

const styles = {
  heroContainer: { padding: "20px", backgroundColor: "#F8FAFF", fontFamily: "Arial, sans-serif" },
  
   navbar: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 40px", backgroundColor: "#fff", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" },
  logo: { fontSize: "24px", fontWeight: "bold", color: "#1565C0" },
  navLinks: { display: "flex", alignItems: "center", gap: "15px" },
  link: { textDecoration: "none", color: "#333", fontSize: "14px", fontWeight: "500" },
  loginButton: { backgroundColor: "transparent", border: "1px solid #1565C0", padding: "8px 16px", borderRadius: "5px", cursor: "pointer", color: "#1565C0" },
  tryFreeButton: { backgroundColor: "#1565C0", color: "#fff", padding: "8px 16px", border: "none", borderRadius: "5px", cursor: "pointer" },

  /* Hero Section */
  heroContent: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "50px 40px", maxWidth: "1200px", margin: "auto" },
  textContainer: { maxWidth: "500px" },
  title: { fontSize: "40px", fontWeight: "bold", color: "#222" },
  subtitle: { fontSize: "18px", color: "#444", margin: "10px 0" },
  amount: { color: "#007AFF", fontWeight: "bold" },
  referButton: { backgroundColor: "#007AFF", color: "#fff", padding: "12px 20px", border: "none", borderRadius: "5px", cursor: "pointer", fontSize: "16px" },

  
  imageContainer: { position: "relative" },
  image: { width: "300px", borderRadius: "10px", boxShadow: "0 4px 10px rgba(0,0,0,0.1)" },
};

export default HeroSection;
